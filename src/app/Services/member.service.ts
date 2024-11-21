import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private Http:HttpClient) { }

  getMember(){
    return this.Http.get<Member[]>('http://localhost:5198/api/Users');
  }
  createMember(member:any){
    return this.Http.post('http://localhost:5198/api/Users',member);
   }
  deleteMember(memberId:number){
    return this.Http.delete('http://localhost:5198/api/Users/'+ memberId);
   }
   updateMember(member:Member,userId:number){
    return this.Http.put('http://localhost:5198/api/Users/'+ userId,member);
   }
   getMemberById(memberId : number){
    return this.Http.get<Member>('http://localhost:5198/api/Users/' + memberId);
  }
}
