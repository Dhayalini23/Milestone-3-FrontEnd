import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../Services/member.service';
import { ProgramService } from '../../../Services/program.service';
import { EnrollmentService } from '../../../Services/enrollment.service';
import { SubscriptionService } from '../../../Services/subscription.service';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrl: './count-display.component.css'
})
export class CountDisplayComponent implements OnInit{
  members: any;
  programs: any;
  subscription: any;
  memberCount: number = 0;
  programCount: number = 0;
  subscriptionCount: number = 0;


  constructor(
    private memberService: MemberService,
    private programService: ProgramService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    // Fetching member data and calculating member count
    this.memberService.getMember().subscribe(
      (data) => {
        console.log(data);
        this.members = data;
        this.memberCount = this.members.length;  // Calculate the member count
      },
      (error) => {
        console.error('Error fetching member data:', error);
      }
    );

    // Fetching program data and calculating program count
    this.programService.getAllWorkoutPrograms().subscribe(
      (data) => {
        console.log(data);
        this.programs = data;
        this.programCount = this.programs.length;  // Calculate the program count
      },
      (error) => {
        console.error('Error fetching program data:', error);
      }
    );

    // Fetching subscription data and calculating enrollment count
    this.subscriptionService.getSubscription().subscribe(
      (data) => {
        console.log(data);
        this.subscription = data;
        this.subscriptionCount = this.subscription.length;  // Calculate the enrollment count (adjust logic based on actual data)
      },
      (error) => {
        console.error('Error fetching subscription data:', error);
      }
    );



  }
}


