import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserEntity} from "../../entities/user-entity";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // url = 'http://localhost:8081/api/v1/users';
  private apiUrl = environment.apiUrl+"users";

  constructor(private httpClient : HttpClient) { }

  updteProfile(user: UserEntity) : Observable<UserEntity>{
    return this.httpClient.put<UserEntity>(`${this.apiUrl}/update`, user);
  }

  loadAllUsers(){
    return this.httpClient.get<UserEntity[]>(this.apiUrl);
  }
}
