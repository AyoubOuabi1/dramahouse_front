import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserEntity} from "../../../entities/user-entity";
import {AppState} from "../../../state/app-state";
import {Store} from "@ngrx/store";
import {AuthResponse} from "../../../entities/auth-response";
import {FormBuilder, FormGroup} from "@angular/forms";
import {updateProfile} from "../../../state/user/user-action";
import {LocalStorgeServiceService} from "../../../service/local-storage/local-storge-service.service";

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.css']
})
export class ProfilDetailComponent implements OnInit{

  user!:AuthResponse | null;

  profileForm! : FormGroup;
  constructor(private store : Store<AppState>,
              private fb : FormBuilder,
              private localStorageService : LocalStorgeServiceService) { }

  ngOnInit(): void {
    this.user = this.localStorageService.getUser();
    this.initForm(this.user);

  }

  initForm(user: AuthResponse | null){
    this.profileForm = this.fb.group({
      email: [user?.email],
      password: ['']
    });
  }
  onSubmit(){
    if(this.profileForm.valid){
      this.store.dispatch(updateProfile({user: this.profileForm.value}));
    }
  }
}
