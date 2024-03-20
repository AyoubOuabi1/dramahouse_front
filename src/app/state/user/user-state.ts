import { UserEntity } from "src/app/entities/user-entity";

export interface UserState {
    user: UserEntity;
    users: UserEntity[];
    IsAuthenticated: boolean;
    IsLoading: boolean;
    ErrorMessage: string | null;

}
