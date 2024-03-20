import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserEntity} from "../../../entities/user-entity";
import {AppState} from "../../../state/app-state";
import {Store} from "@ngrx/store";
import * as UserActions from "../../../state/user/user-action";
import {state} from "@angular/animations";
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
    users$!:Observable<UserEntity[]>
    constructor(private store:Store<AppState>) {
    }
  ngOnInit(): void {
      this.store.dispatch(UserActions.loadAllUsers())
      this.users$=this.store.select(state => state.user.users).pipe()
  }

}
