import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Interfaces/member';
import { MemberService } from '../../../Services/member.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FilterMemberPipe } from '../../../Pipes/filter-member.pipe';
import { EnrollmentService } from '../../../Services/enrollment.service';
import { ProgramService } from '../../../Services/program.service';
import { SubscriptionService } from '../../../Services/subscription.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  deleteMember:number=0;
  members: Member[] = [];
  member : Member|undefined;
  searchText:any = '';
  selectedMember: any;
  showMemberDetails: any;
  workoutPrograms:any;
  programs:any;
  subscriptions:any;

  constructor(private memberService: MemberService, 
    private enrollmentService :EnrollmentService,
    private programService:ProgramService,
    private subscriptionService:SubscriptionService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.loadMembers();
    this.programService.getAllWorkoutPrograms().subscribe(
      data => {
        console.log(data);
        this.programs = data;
      });
      this.subscriptionService.getSubscription().subscribe(
        data => {
          console.log(data);
          this.subscriptions = data;
        });
  }

onDelete() {
  
    this.memberService.deleteMember(this.deleteMember).subscribe(
      data => {
        this.loadMembers();  // Reload the list after deletion
      },
      error => {
        console.log(error)
      }
    );
    location.reload();
}
DeleteId(memberId:number){
  this.deleteMember=memberId
  console.log(this.deleteMember)
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
      // alert("Failed to load members!");
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
