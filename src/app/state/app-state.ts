import { AuthResponse } from "../entities/auth-response";
import { UserEntity } from "../entities/user-entity";
import {MovieState} from "./movie/movie-state";
import {PersonState} from "./person/person-state";
import {UserState} from "./user/user-state";

export interface AppState {
    user: UserState;
    authResponse: AuthResponse;
    movie: MovieState;
    person: PersonState;
}


