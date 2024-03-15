import { Injectable } from '@angular/core';
import { UserEntity } from '../../entities/user-entity';
import { AuthResponse } from '../../entities/auth-response';
import { HttpClient } from '@angular/common/http';
import { UserEntityLogin } from '../../entities/user-entity-login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TokenRes } from '../../entities/token-res';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatonServiceService {

 // private readonly URL_BASE = environment.apiUrl+"auth/";
  private readonly URL_BASE = "http://localhost:8081/api/v1/auth/";

  constructor(private _http : HttpClient) {}

  login(UserEntity: UserEntityLogin) : Observable<AuthResponse>{
    console.log("login");

    return this._http.post<AuthResponse>(this.URL_BASE+'login', UserEntity)
  }

  register(UserEntity: UserEntity) : Observable<AuthResponse>{
    return this._http.post<AuthResponse>(this.URL_BASE+'register', UserEntity)
  }

  checkJwtValidity(token: string) : Observable<boolean> {
    return this._http.get<boolean>(this.URL_BASE+`checkJwtValidity/${token}`)
  }
}
// Path: src/app/state/user/user-action.ts
