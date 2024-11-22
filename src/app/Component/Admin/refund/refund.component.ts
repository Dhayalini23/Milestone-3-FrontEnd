import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../../../Services/payment.service';
import { Refund } from '../../../Interfaces/payment';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrl: './refund.component.css'
})

export class RefundComponent {

  // refundForm!: FormGroup;
  // isEditMode: boolean = false;
  // refundId: number | null = null;  

  // constructor(
  //   private fb: FormBuilder,
  //   private refundService: PaymentService,
  //   private router: Router,
  //   private toastr: ToastrService
  // ) { }

  // ngOnInit(): void {
  //   this.initializeRefundForm();

  
  //   const refundId = this.router.url.split('/').pop();  
  //   if (refundId) {
  //     this.isEditMode = true;
  //     this.refundId = Number(refundId);
  //     this.loadRefundData(this.refundId);
  //   }
  // }


  // private initializeRefundForm() {
  //   this.refundForm = this.fb.group({
  //     memberId: ['', [Validators.required]],  
  //     reason: ['', [Validators.required, Validators.maxLength(255)]],  
  //     amount: ['', [Validators.required, Validators.min(1)]],  
  //   });
  // }


  // private loadRefundData(refundId: number) {
  //   this.refundService.getPaymentById(refundId).subscribe(data => {
  //     this.refundForm.patchValue({
  //       memberId: data.memberId,
  //       reason: data.reason,
  //       amount: data.amount,
  //     });
  //   }, error => {
  //     this.toastr.error("Refund data not found.");
  //   });
  // }

 
  // get f() {
  //   return this.refundForm.controls;
  // }


  // onSubmit() {
  //   if (this.refundForm.invalid) {
  //     return;  
  //   }

  //   const refund: Refund = this.refundForm.value; 

  //   if (this.isEditMode) {
     
  //     this.refundService.updatePayment(refund, this.refundId!).subscribe(
  //       data => {
  //         this.toastr.success('Refund updated successfully.');
  //         this.router.navigate(['/refunds']);
  //       },
  //       error => {
  //         this.toastr.error('Failed to update refund.');
  //       }
  //     );
  //   } else {
    
  //     this.refundService.createPayment(refund).subscribe(
  //       data => {
  //         this.toastr.success('Refund request submitted successfully.');
  //         this.router.navigate(['/refunds']);
  //       },
  //       error => {
  //         this.toastr.error('Failed to create refund.');
  //       }
  //     );
  //   }
  // }


  // cancel() {
  //   this.refundForm.reset();
  //   this.router.navigate(['/refunds']);
  // }
}