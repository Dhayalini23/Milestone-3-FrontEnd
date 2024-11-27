import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  memberId:number|undefined;
  api:string="http://localhost:5278/api/";
  constructor(private Http:HttpClient) { }
  getUserDetails(userId:string){
    return this.Http.get<Member>(this.api+'Admin/Admin/Get-Member-By-UserId/'+userId);
  }
}
