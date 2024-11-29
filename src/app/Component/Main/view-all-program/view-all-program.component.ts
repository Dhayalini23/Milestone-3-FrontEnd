import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../Services/program.service';
import { WorkOutProgram } from '../../../Interfaces/program';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { EnrollmentService } from '../../../Services/enrollment.service';

@Component({
  selector: 'app-view-all-program',
  templateUrl: './view-all-program.component.html',
  styleUrl: './view-all-program.component.css'
})
export class ViewAllProgramComponent implements OnInit {
  workoutPrograms:WorkOutProgram[]=[];
  memberId:string;
  member:any;
  isUser:boolean;
  constructor(private programService:ProgramService,private route:ActivatedRoute,private userService:UserService,private enrollmentService:EnrollmentService){
    const id = this.route.snapshot.paramMap.get("id");
    this.memberId = id ? id.replace(':', '') : '';
    if (id) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }
  ngOnInit(): void {
    if(this.isUser==true){
      this.userService.getUserDetails(this.memberId).subscribe(data => {
        this.member=data;
        console.log(this.member);
        this.enrollmentService.getEnrollablePrograms(this.member.id).subscribe(i=>{
          this.workoutPrograms=i;
        })
      });
    }else{
      this.programService.getAllWorkoutPrograms().subscribe(data =>{
        console.log(data);
        
        this.workoutPrograms = data;
    })
    }
}
    
}
