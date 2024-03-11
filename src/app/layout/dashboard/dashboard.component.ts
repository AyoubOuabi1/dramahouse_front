import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthResponse } from 'src/app/entities/auth-response';
import { TokenRes } from 'src/app/entities/token-res';
import { AuthenticatonServiceService } from 'src/app/service/authenticaton-service.service';
import { AppState } from 'src/app/state/app-state';
import * as UserActions from 'src/app/state/user/user-action'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  token!: TokenRes;
  tokenstring!: string;


  constructor(
    private store: Store<AppState>,
  ) {

    this.tokenstring = localStorage.getItem('token')+'';
    console.log(this.tokenstring);

    //this.store.dispatch(UserActions.checkJwtValidity({token: this.tokenstring}))




  }

  ngOnInit(): void {

  }
   //for dashboard

}
