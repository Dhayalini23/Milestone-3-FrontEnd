import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  api:string="http://localhost:5278/api/";
  constructor(private Http: HttpClient) { }

  getMember() {
    var tt = this.Http.get<Member[]>(this.api+'Admin/Get-All-Members');

    tt.subscribe(data => 
        {
         console.log(data);
         
        },
        error =>
        {
          console.log(error);
          
        }
    )
    return tt;
  }
  createMember(member: any) {
    return this.Http.post(this.api+'Admin/Add-User', member);
  }
  deleteMember(memberId: number) {
    return this.Http.delete(this.api+'Admin/Delete-Member/' + memberId);
  }
  updateMember(member: Member, memberId: string) {
    return this.Http.put(this.api+'Admin/Update-Member' + memberId, member);
  }
  getMemberById(memberId: string) {
    return this.Http.get<Member>(this.api+'Admin/Get-Single-Member' + memberId);
  }
  getSingleMemberById(memberId: number) {
    return this.Http.get<Member>(this.api+'Admin/Get-Single-Member' + memberId);
  }
}
