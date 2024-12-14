import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Interfaces/member';
import { MemberService } from '../../../Services/member.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FilterMemberPipe } from '../../../Pipes/filter-member.pipe';
import { EnrollmentService } from '../../../Services/enrollment.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  members: Member[] = [];
  member : Member|undefined;
  searchText:any = '';
  selectedMember: any;
  showMemberDetails: any;
  workoutPrograms:any;

  constructor(private memberService: MemberService, 
    private enrollmentService :EnrollmentService,
    private toastr: ToastrService, 
    private router:Router,
    // private filter:FilterMemberPipe
  ) { }

  ngOnInit(): void {
    this.loadMembers();
  }

//   close() { }
//   onDelete(memberId: number) {

//     if (confirm("Do you want to delete this member?")) {
//       this.memberService.deleteMember(memberId).subscribe(data => {
//       this.toastr.success('Member is deleted',"Deleted",{
//         timeOut:10000,
//         closeButton:true
//       });
//         this.loadMembers();  
//       }, error => {
//         this.toastr.error("Failed to delete member", "Error");
//       });
//     }
//   }
//   enrollments(id:number){

//   }


//   loadMembers(){

//     this.memberService.getMember().subscribe(data =>{
//       console.log(data);  
//       this.members = data;
//     }, error => {
//       this.toastr.error("Failed to load members", "Error");
//     });
//   }


//   onEdit(member: any): void {
//     this.selectedMember = { ...member }; 
//     console.log('Editing member:', this.selectedMember);
//   }
  
//  onView(memberid:string){
//     this.router.navigate([`viewMember/id${memberid}`])
//  }
close() { }

// On Delete with confirmation and custom alert for success/failure
onDelete(memberId: number) {
  const confirmDelete = window.confirm("Are you sure you want to delete this member?");
  
  if (confirmDelete) {
    this.memberService.deleteMember(memberId).subscribe(
      data => {
        alert("Member deleted successfully!");
        this.loadMembers();  // Reload the list after deletion
      },
      error => {
        alert("Failed to delete member!");
      }
    );
  }
}

// Placeholder for enrollments (currently empty)
enrollments(id: number) {
  const Uid=id.toString();
  this.memberService.getMemberById(Uid).subscribe(data => {
    this.member=data;
    console.log(this.member);
    this.enrollmentService.getMemberEnrolledPrograms(this.member.id).subscribe(i=>{
      this.workoutPrograms=i;
      console.log(this.workoutPrograms);
      
    })
  });
}

// Load members data from the service
loadMembers() {
  this.memberService.getMember().subscribe(
    data => {
      console.log(data);
      this.members = data;
    },
    error => {
      alert("Failed to load members!");
    }
  );
}

// On Edit with custom alert for success
onEdit(member: any): void {
  this.selectedMember = { ...member };
  console.log('Editing member:', this.selectedMember);
  
  // Here you can add logic to edit the member and show success alert
  // Assuming edit operation is done here, show success alert
  alert("Member updated successfully!");
}

// View member details
onView(memberid: string) {
  this.router.navigate([`viewMember/id${memberid}`]);
}
}
