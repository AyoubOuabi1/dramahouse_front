import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserEntityLogin } from 'src/app/entities/user-entity-login';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from 'src/app/state/user/user-action'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  user!: UserEntityLogin;

  loginUser(userData: UserEntityLogin) {
    
    this.store.dispatch(UserActions.login({ user: userData }));

  }


  ngOnInit(): void {
    this.loginForm = this._fb.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.loginUser(this.user);
    } else {
      console.error('Form is invalid');
    }
  }

  constructor(
    private store: Store<AppState>,
    private _fb: FormBuilder,
    private router : Router
    
    ) {}

}
