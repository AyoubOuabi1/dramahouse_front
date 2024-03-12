import { AuthResponse } from "../entities/auth-response";
import { UserEntity } from "../entities/user-entity";
import {MovieState} from "./movie/movie-state";

export interface AppState {
    user: UserEntity;
    authResponse: AuthResponse;
    movie: MovieState;

}

