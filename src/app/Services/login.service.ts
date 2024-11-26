import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http: HttpClient) { }
  Login(userId:string,password:string) {
    return this.Http.get(`http://localhost:5278/api/Login?Id=${userId}&password=${password}`);
  }
}
