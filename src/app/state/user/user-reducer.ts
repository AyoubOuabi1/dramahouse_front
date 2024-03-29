import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../user/user-action';
import { UserEntity } from 'src/app/entities/user-entity';
import { AuthResponse } from 'src/app/entities/auth-response';


export interface UserState {
    userAuth: AuthResponse | null;
    userr: UserEntity | null;
    users: UserEntity[] | null;
    loading: boolean;
    error: string | null;
  }

  export const initialState: UserState = {
    userAuth: null,
    userr: null,
    users: [],
    loading: false,
    error: null,
  };

  export const userReducer = createReducer(
    initialState,

    on(UserActions.register, state => ({
      ...state,
      loading: true,
      error: null,

    })),

    on(UserActions.registerSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),

    on(UserActions.registerFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false
    })),

    on(UserActions.login, state => ({
      ...state,
      loading: true,
      error: null,

    })),

    on(UserActions.loginSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),

    on(UserActions.loginFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false
    })),

    on(UserActions.logout, state => ({
      ...state,
      user: null,
      loading: false,
      error: null,
    })),
    on(UserActions.updateProfile, state => ({
      ...state,
      loading: true,
      error: null,
    })),

    on(UserActions.updateProfileSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),

    on(UserActions.updateProfileFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false
    })),

    on(UserActions.loadAllUsersSuccess, (state, { users }) => ({
      ...state,
      users: users,
      loading: false
    })),
    on(UserActions.loadAllUsersFailure, (state, { errorMessage }) => ({
      ...state,
      error: errorMessage,
      loading: false
    }))




  );



