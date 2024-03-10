import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorgeServiceService {

  
  setToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(): any {
     return localStorage.getItem('token'); 
  }

  getUserInfo() {
    return localStorage.getItem('userInfo');
  }

  setUserInfo(userInfo: any): void {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }


  clearLocalStorage() {
    localStorage.clear();
  }

}
