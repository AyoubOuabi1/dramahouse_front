import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthenticatonServiceService } from 'src/app/service/authenticaton-service.service';
import * as UserActions from '../user/user-action';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalStorgeServiceService } from 'src/app/service/local-storge-service.service';


@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private authService:AuthenticatonServiceService,
        private router : Router,
        private localStorageService: LocalStorgeServiceService
        ){}


    register$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.register),
        mergeMap(action => this.authService.register(action.user).pipe(
            map(user => {
                this.localStorageService.setToken(user.accessToken); // Call the saveToLocalStorage method from the LocalStorgeService
                return UserActions.registerSuccess({user});
            }),
            catchError((errorMessage) => [UserActions.registerFailure({errorMessage})])
        ))
    ));


    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.registerSuccess),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});

    login$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.login),
        mergeMap(action => this.authService.login(action.user).pipe(
            map(user => UserActions.loginSuccess({user})),
            catchError((errorMessage) => [UserActions.loginFailure({errorMessage})])
        ))
    ));

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.router.navigate(['/dashboard']))
    ), {dispatch: false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.router.navigate(['/'])),
        tap(() => this.localStorageService.clearLocalStorage())
    ), {dispatch: false});
}