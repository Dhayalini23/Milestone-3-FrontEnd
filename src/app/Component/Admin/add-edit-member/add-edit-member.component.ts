import { Component } from '@angular/core';
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

  memberForm: FormGroup;
    isEditMode = false;
    memberId: number
  
    constructor(private fb: FormBuilder,
      private memberService: MemberService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService) {
  
      const uid = this.route.snapshot.paramMap.get("id");
      this.memberId = Number(uid);
  
      this.memberForm = this.fb.group({

        name: ['', [Validators.required]],
        email: [''],
        password: [''],
        phone: ['', [Validators.required]],
        address: this.fb.group({
          addressLine1:['',[Validators.required]],
          addressLine2:[''],
          city:['']
        })
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
  
          this.memberForm.patchValue({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
          })
        }, error => {
          this.toastr.error("Member is not found");
        });
      }
    }
  
    onSubmit() {
      let user = this.memberForm.value;
  
      if (this.isEditMode == true) {
        this.memberService.updateMember(user,this.memberId).subscribe(data => {
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
  
    cancel() {
      this.memberForm.reset();
    }

}
