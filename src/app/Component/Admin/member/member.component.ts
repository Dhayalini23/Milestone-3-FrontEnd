import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Interfaces/member';
import { MemberService } from '../../../Services/member.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  members: Member[] = [];
  searchText: any;
  constructor(private memberService: MemberService, private toastr: ToastrService, private router:Router) {
    console.log("test");

  }

  ngOnInit(): void {
    this.loadMembers();
  }

  close() { }
  onDelete(memberId: number) {

    if (confirm("Do you want to delete this member?")) {
      this.memberService.deleteMember(memberId).subscribe(data => {
      this.toastr.success('Task is deleted',"Deleted",{
        timeOut:10000,
        closeButton:true
      });
        this.loadMembers();
        
      });
    }
  }
  loadMembers(){

    this.memberService.getMember().subscribe(data =>{
      console.log(data)
      this.members = data;
    })
  }

  onEdit(memberid:number){
    console.log(memberid);
    this.router.navigate(['user-add',memberid])
  }


}
