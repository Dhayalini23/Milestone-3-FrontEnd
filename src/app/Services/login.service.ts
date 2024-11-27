import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api:string=`http://localhost:5278/api/`
  constructor(private Http: HttpClient) { }
  Login(user :any) {
    return this.Http.post(this.api+`Login/Login`,user);
  }
  LoginCheck(){
    return this.Http.get(this.api+`Login/check`);
  }
}
