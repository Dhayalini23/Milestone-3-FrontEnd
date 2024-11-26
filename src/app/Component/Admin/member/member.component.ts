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
selectedMember: any;
showMemberDetails: any;
  constructor(private memberService: MemberService, private toastr: ToastrService, private router:Router) {

  }

  ngOnInit(): void {
    this.loadMembers();
  }

  close() { }
  onDelete(memberId: string) {

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
      console.log(data);
      
      this.members = data;
    })
  }
  onEdit(member: any): void {
    this.selectedMember = { ...member }; // Clone the member to avoid direct modification
    console.log('Editing member:', this.selectedMember);
  }

  // onEdit(memberid:string){
  //   this.router.navigate([ `editMember/${memberid}`])
  // }
 onView(memberid:string){
    this.router.navigate([`viewMember/id${memberid}`])
 }

}
