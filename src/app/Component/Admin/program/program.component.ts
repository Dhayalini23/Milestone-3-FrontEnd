import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProgramService } from '../../../Services/program.service';
import { Program } from '../../../Interfaces/program';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent implements OnInit {

  programs: Program[] = [];
  searchText: any;
  constructor(private programService: ProgramService, private toastr: ToastrService, private router:Router) {
    console.log("test");

  }

  ngOnInit(): void {
    this.loadProgram();
  }

  close() { }
  onDelete(programId: number) {

    if (confirm("Do you want to delete this member?")) {
      this.programService.deleteProgram(programId).subscribe(data => {
      this.toastr.success('Task is deleted',"Deleted",{
        timeOut:10000,
        closeButton:true
      });
        this.loadProgram();
        
      });
    }
  }
  loadProgram(){

    this.programService.getProgram().subscribe(data =>{
      console.log(data)
      this.programs = data;
    })
  }

  onEdit(programid:number){
    console.log(programid);
    this.router.navigate(['user-add',programid])
  }

}
