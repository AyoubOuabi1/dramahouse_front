import { UserEntity } from "src/app/entities/user-entity";

export interface UserState {
    User: UserState;
    IsAuthenticated: boolean;
    IsLoading: boolean;
    ErrorMessage: string | null;
}
