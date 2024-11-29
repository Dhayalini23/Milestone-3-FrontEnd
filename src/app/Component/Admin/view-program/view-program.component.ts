import { Component } from '@angular/core';
import { Program } from '../../../Interfaces/program';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../../Services/member.service';
import { ToastrService } from 'ngx-toastr';
import { ProgramService } from '../../../Services/program.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrl: './view-program.component.css'
})
export class ViewProgramComponent {
  programs: Program[] = [];
  programid: string | undefined;
  meprogram!: Program;
  constructor(private route: ActivatedRoute, private router: Router, private programService: ProgramService, private toastr: ToastrService) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.programid = String(id);
  }


  ngOnInit(): void {
    if (this.programid != undefined) {
      this.programService.getprogramById(this.programid).subscribe(data => {
       // data.name = new Date(data.name).toISOString().slice(0, 10);
        console.log(data);
        this.meprogram = data;
      }, (error) => {
        this.toastr.warning("Program is not found!: " + error.error.title);
      });
    }
  }
  loadMembers() {
    this.programService.getProgram().subscribe(data => {
      console.log(data);
      this.programs = data;
    })
  }

  onClose() {

  }
}
