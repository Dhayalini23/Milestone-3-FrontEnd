import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramService } from '../../../Services/program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-program',
  templateUrl: './add-edit-program.component.html',
  styleUrl: './add-edit-program.component.css'
})
export class AddEditProgramComponent {

  programForm: FormGroup;
  isEditMode = false;
  programId: number

  constructor(private fb: FormBuilder,
    private programService: ProgramService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    const uid = this.route.snapshot.paramMap.get("id");
    this.programId = Number(uid);

    this.programForm = this.fb.group({

      programName: ['', [Validators.required]],
      description: [''],
      programStatus: [''],
      creationDate: ['', [Validators.required]],
    });


    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.programService.getprogramById(this.programId).subscribe(data => {

        this.programForm.patchValue({
          id: data.id,
          programName: data.programName,
          description: data.description,
          programStatus: data.programStatus,
          creationDate: data.creationDate,
        })
      }, error => {
        this.toastr.error("Program is not found");
      });
    }
  }

  onSubmit() {
    let program = this.programForm.value;

    if (this.isEditMode == true) {
      this.programService.updateProgram(program,this.programId).subscribe(data => {
        this.toastr.success("Program is updated successfully");
        this.router.navigate(["/programs"]);
      });
    } else {
      console.log(program)
      this.programService.createProgram(program).subscribe(data => {
        this.toastr.success("Program is created successfully");
        this.router.navigate(["/programs"]);
      });
    }


  }

  cancel() {
    this.programForm.reset();
  }

}
