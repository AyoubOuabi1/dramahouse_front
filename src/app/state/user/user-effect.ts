import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthenticatonServiceService } from 'src/app/service/auth/authenticaton-service.service';
import * as UserActions from '../user/user-action';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalStorgeServiceService } from 'src/app/service/local-storage/local-storge-service.service';
import {UserService} from "../../service/user/user.service";


@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private authService:AuthenticatonServiceService,
        private router : Router,
        private localStorageService: LocalStorgeServiceService,
        private userService: UserService
        ){}


    register$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.register),
        mergeMap(action => this.authService.register(action.user).pipe(
            map(user => {
                this.localStorageService.setUser(user);
                return UserActions.registerSuccess({user});
            }),
            catchError((errorMessage) => [UserActions.registerFailure({errorMessage})])
        ))
    ));


    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.registerSuccess),
        tap(() => this.router.navigate(['/']))
    ), {dispatch: false});

    login$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.login),
        mergeMap(action => this.authService.login(action.user).pipe(
            map(user => {
              this.localStorageService.setUser(user);
              return  UserActions.loginSuccess({user})
            }),
            catchError((errorMessage) => [UserActions.loginFailure({errorMessage})])
        ))
    ));

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
    ), {dispatch: false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.router.navigate(['/'])),
        tap(() => this.localStorageService.clearLocalStorage())
    ), {dispatch: false});

    updateProfile$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.updateProfile),
        mergeMap(action => this.userService.updteProfile(action.user).pipe(
            map(user => UserActions.updateProfileSuccess({user})),
            catchError((errorMessage) => [UserActions.updateProfileFailure({errorMessage})])
        ))
    ));

    loadAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loadAllUsers),
        mergeMap(() => this.userService.loadAllUsers().pipe(
            map(users => UserActions.loadAllUsersSuccess({users})),
            catchError((errorMessage) => [UserActions.loadAllUsersFailure({errorMessage})])
        ))
    ));





}
