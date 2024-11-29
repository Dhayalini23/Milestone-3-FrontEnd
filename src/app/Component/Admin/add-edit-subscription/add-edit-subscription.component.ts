import { Component, Input, OnInit } from '@angular/core';
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

  @Input() subscriptionData: any;
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

      title: [''],
      description:[''],
      duration: [''],
      isSpecialOffer:[''],
      paymentType:[''],
      paymentDate:[''],
      userCanPay:[''],

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
        this.subscriptionForm.patchValue(data)
      }, error => {
        this.toastr.error("Subscription is not found");
      });
    }
  }

  onSubmit() {
    let subscription = this.subscriptionForm.value;

    if (this.isEditMode == true) {
      this.subscriptionService.updateSubscription(subscription,this.subscriptionId).subscribe(data => {
        this.toastr.success("Subscription is updated successfully");
        this.router.navigate(["/subscriptions"]);
      });
    } else {
      this.subscriptionService.createSubscription(subscription).subscribe(data => {
        this.toastr.success("Subscription is created successfully");
        this.router.navigate(["/subscriptions"]);
      });
    }
  }
  saveChanges(): void {
    console.log('Updated subscription data:', this.subscriptionData);   
    const modalElement = document.getElementById('exampleModal') as any;
}
  cancel() {
    this.subscriptionForm.reset();
  }

}
