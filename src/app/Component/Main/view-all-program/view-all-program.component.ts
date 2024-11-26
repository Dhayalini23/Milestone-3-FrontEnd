import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../Services/program.service';
import { WorkOutProgram } from '../../../Interfaces/program';

@Component({
  selector: 'app-view-all-program',
  templateUrl: './view-all-program.component.html',
  styleUrl: './view-all-program.component.css'
})
export class ViewAllProgramComponent implements OnInit {
  workoutPrograms:WorkOutProgram[]=[];
  constructor(private programService:ProgramService){

  }
  ngOnInit(): void {
    this.programService.getAllWorkoutPrograms().subscribe(data =>{
      console.log(data);
      
      this.workoutPrograms = data;
  })
}
    
}
