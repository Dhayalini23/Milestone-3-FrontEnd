import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  memberId:number=0;
  api:string="http://localhost:5278/api/";
  constructor(private Http:HttpClient) { }
  getUserDetails(userId:string){
    return this.Http.get<Member>('http://localhost:5278/api/Admin/Get-Member-By-UserId/'+userId);
  }
}
