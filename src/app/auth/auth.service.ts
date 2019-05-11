import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn(data) {
    sessionStorage.setItem('token', window.btoa(data.username + ' ' + data.password))
  }

  isLogged() {
    let token = sessionStorage.getItem('token');
    return token;
  }
}
