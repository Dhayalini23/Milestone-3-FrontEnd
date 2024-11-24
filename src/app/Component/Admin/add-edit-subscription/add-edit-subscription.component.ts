import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../Services/subscription.service';

@Component({
  selector: 'app-add-edit-subscription',
  templateUrl: './add-edit-subscription.component.html',
  styleUrl: './add-edit-subscription.component.css'
})
export class AddEditSubscriptionComponent  {


  subscriptionForm: FormGroup;
  isEditMode = false;
  subscriptionId: string

  constructor(private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    const uid = this.route.snapshot.paramMap.get("id");
    this.subscriptionId = String(uid);

    this.subscriptionForm = this.fb.group({

      subscriptionName: ['', [Validators.required]],
      duration: ['']
    });


    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.subscriptionService.getSubscriptionById(this.subscriptionId).subscribe(data => {
        console.log(data);
        this.subscriptionForm.patchValue({
          // id: data.id,
          // subscriptionName: data.subscriptionName,
          // duration: data.duration
        })
      }, error => {
        this.toastr.error("Program is not found");
      });
    }
  }

  onSubmit() {
    let program = this.subscriptionForm.value;

    if (this.isEditMode == true) {
      this.subscriptionService.updateSubscription(program,this.subscriptionId).subscribe(data => {
        this.toastr.success("Program is updated successfully");
        this.router.navigate(["/programs"]);
      });
    } else {
      console.log(program)
      this.subscriptionService.createSubscription(program).subscribe(data => {
        this.toastr.success("Program is created successfully");
        this.router.navigate(["/payments"]);
      });
    }
  }

  cancel() {
    this.subscriptionForm.reset();
  }

}
