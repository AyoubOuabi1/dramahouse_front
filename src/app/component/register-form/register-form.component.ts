import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserEntity } from 'src/app/entities/user-entity';
import { UserEntityLogin } from 'src/app/entities/user-entity-login';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from 'src/app/state/user/user-action'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  user!: UserEntity;

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      this.registerUser(this.user);
    } else {
      console.error('Form is invalid');
    }
  }

  registerUser(userData: UserEntity) {
    this.store.dispatch(UserActions.register({ user: userData }));
  }



  constructor(
    private store: Store<AppState>,
    private _fb: FormBuilder,
    private router: Router
    ) {}

  toLogin() {
    this.router.navigate(['/auth/login']);
  }
}
