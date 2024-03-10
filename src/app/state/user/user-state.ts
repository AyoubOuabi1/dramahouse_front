import { UserEntity } from "src/app/entities/user-entity";

export interface UserState {
    User: UserEntity;
    IsAuthenticated: boolean;
    IsLoading: boolean;
    ErrorMessage: string | null;
}