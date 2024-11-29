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

  constructor(private memberService: MemberService, 
    private toastr: ToastrService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  close() { }
  onDelete(memberId: number) {

    if (confirm("Do you want to delete this member?")) {
      this.memberService.deleteMember(memberId).subscribe(data => {
      this.toastr.success('Member is deleted',"Deleted",{
        timeOut:10000,
        closeButton:true
      });
        this.loadMembers();  
      }, error => {
        this.toastr.error("Failed to delete member", "Error");
      });
    }
  }
  loadMembers(){

    this.memberService.getMember().subscribe(data =>{
      console.log(data);  
      this.members = data;
    }, error => {
      this.toastr.error("Failed to load members", "Error");
    });
  }
  onEdit(member: any): void {
    this.selectedMember = { ...member }; 
    console.log('Editing member:', this.selectedMember);
  }

 onView(memberid:string){
    this.router.navigate([`viewMember/id${memberid}`])
 }

}
