import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/auth/register";
  private _loginUrl = "http://localhost:3000/api/auth/login";
  private _newEventUrl = "http://localhost:3000/api/events/new-event";

  constructor(private http: HttpClient,
  private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/events/all'])
  }

  loggedIn(){
    return !!localStorage.getItem('token')//true or false
  }

  getToken(){
    return localStorage.getItem('token')
  }

  addEvent(event){
    return this.http.post<any>(this._newEventUrl, event)
  }
}
