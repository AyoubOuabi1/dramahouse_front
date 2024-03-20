import { createAction , props } from "@ngrx/store";
import { AuthResponse } from "src/app/entities/auth-response";
import { TokenRes } from "src/app/entities/token-res";
import { UserEntity } from "src/app/entities/user-entity";
import { UserEntityLogin } from "src/app/entities/user-entity-login";
export const login = createAction(
    '[User] Login',
    props<{ user: UserEntityLogin }>()
);

export const logout = createAction(
    '[User] Logout'
);

export const register = createAction(
    '[User] Register',
    props<{ user: UserEntity }>()
);

export const loginSuccess = createAction(
    '[User] Login Success',
    props<{ user: AuthResponse }>()
);

export const loginFailure = createAction(
    '[User] Login Failure',
    props<{ errorMessage: string }>()
);

export const registerSuccess = createAction(
    '[User] Register Success',
    props<{ user: AuthResponse }>()
);


export const registerFailure = createAction(
    '[User] Register Failure',
    props<{ errorMessage: string }>()
);

export const updateProfile = createAction(
    '[User] Update Profile',
    props<{ user: UserEntity }>()
);

export const updateProfileSuccess = createAction(
    '[User] Update Profile Success',
    props<{ user: UserEntity }>()
);

export const updateProfileFailure = createAction(
    '[User] Update Profile Failure',
    props<{ errorMessage: string }>()
);

export const loadAllUsers = createAction(
    '[User] Load All Users'
);

export const loadAllUsersSuccess = createAction(
    '[User] Load All Users Success',
    props<{ users: UserEntity[] }>()
);

export const loadAllUsersFailure = createAction(
    '[User] Load All Users Failure',
    props<{ errorMessage: string }>()
);

