import { AuthResponse } from "../entities/auth-response";
import { UserEntity } from "../entities/user-entity";

export interface AppState {
    user: UserEntity;
    authResponse: AuthResponse;
}