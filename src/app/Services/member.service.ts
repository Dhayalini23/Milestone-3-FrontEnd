import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private Http: HttpClient) { }

  getMember() {
    var tt = this.Http.get<Member[]>('http://localhost:5278/api/Admin/Get-All-Members');

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
    return this.Http.post('http://localhost:5278/api/Admin/Get-All-Members', member);
  }
  deleteMember(memberId: string) {
    return this.Http.delete('http://localhost:5278/api/Admin/Get-All-Members/' + memberId);
  }
  updateMember(member: Member, memberId: string) {
    return this.Http.put('http://localhost:5278/api/Admin/Get-All-Members/' + memberId, member);
  }
  getMemberById(memberId: string) {
    return this.Http.get<Member>('http://localhost:5278/api/Admin/Get-All-Membersr/' + memberId);
  }
}
