import { Component, Input } from '@angular/core';
import { MemberService } from '../../../Services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-member',
  templateUrl: './add-edit-member.component.html',
  styleUrl: './add-edit-member.component.css'
})

export class AddEditMemberComponent {
  @Input() memberData: any;
  memberForm: FormGroup;
  isEditMode = false;
  memberId: string;


  constructor(private fb: FormBuilder,
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    const uid = this.route.snapshot.paramMap.get("id");
    this.memberId = String(uid);

    this.memberForm = this.fb.group({

      userId: [''],
      profileImage: [''],
      firstName: ['', [Validators.required]],
      lastName: [''],
      age: [''],
      height: ['', [Validators.required]],
      weight: [''],
      gender: [''],
      dob: [''],
      nicNo: [''],
      email: [''],
      contactNo: [''],
      address: ['']
    });


    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.memberService.getMemberById(this.memberId).subscribe(data => {
        console.log(data);
        console.log('Received member data:', this.memberData);
        this.memberForm.patchValue(data);
      }, error => {
        this.toastr.error("Member is not found");
      });
    }
  }

  onSubmit() {
    let user = this.memberForm.value;

    if (this.isEditMode == true) {
      this.memberService.updateMember(user, this.memberId).subscribe(data => {
        console.log("123")
        this.toastr.success("Member is updated successfully");
        this.router.navigate(["/members"]);
      });
    } else {
      console.log(user)
      this.memberService.createMember(user).subscribe(data => {

        this.toastr.success("Member is created successfully");
        this.router.navigate(["/members"]);
      });
    }
  }
  saveChanges(): void {
    console.log('Updated member data:', this.memberData);
    // Handle saving the updated data (e.g., making an API call to update the member)
    const modalElement = document.getElementById('exampleModal') as any;
    // const modal = new bootstrap.Modal(modalElement);
    // modal.hide();
}

  cancel() {
    this.memberForm.reset();
  }

}
