import { Injectable } from '@angular/core';
import {AuthResponse} from "../../entities/auth-response";

@Injectable({
  providedIn: 'root'
})
export class LocalStorgeServiceService {

  responseString : string | null = localStorage.getItem('user');
  response: AuthResponse = this.responseString ? JSON.parse(this.responseString) : {};


  setUser(user:AuthResponse){
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser(): AuthResponse | null {
    return this.response;
  }
  getUserToken(): string | null {
    return this.response.accessToken;

  }
  getRole(): string | null{
    return this.response.role;
  }

  clearLocalStorage() {
    localStorage.clear();
  }

}
