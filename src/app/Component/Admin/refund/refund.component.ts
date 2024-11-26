import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../../../Services/payment.service';
import { Refund } from '../../../Interfaces/payment';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrl: './refund.component.css'
})

export class RefundComponent {

  paymentForm!: FormGroup;
  isEditMode: boolean = false;
  refundId: string | null = null;  

  constructor(
    private fb: FormBuilder,
    private refundService: PaymentService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initializeRefundForm();

  
    const refundId = this.router.url.split('/').pop();  
    if (refundId) {
      this.isEditMode = true;
      this.refundId = String(refundId);
      this.loadRefundData(this.refundId);
    }
  }


  private initializeRefundForm() {
    this.paymentForm = this.fb.group({
      memberId: ['', [Validators.required]],  
      reason: ['', [Validators.required, Validators.maxLength(255)]],  
      amount: ['', [Validators.required, Validators.min(1)]],  
    });
  }


  private loadRefundData(refundId: string) {
    this.refundService.getPaymentById(refundId).subscribe(data => {
      this.paymentForm.patchValue({
        memberId: data.memberId,
        reason: data.reason,
        amount: data.amount,
      });
    }, error => {
      this.toastr.error("Refund data not found.");
    });
  }

 
  get f() {
    return this.paymentForm.controls;
  }


  onSubmit() {
    if (this.paymentForm.invalid) {
      return;  
    }

    const refund: Refund = this.paymentForm.value; 

    if (this.isEditMode) {
     
      this.refundService.updatePayment(refund, this.refundId!).subscribe(
        data => {
          this.toastr.success('Refund updated successfully.');
          this.router.navigate(['/refunds']);
        },
        error => {
          this.toastr.error('Failed to update refund.');
        }
      );
    } else {
    
      this.refundService.createPayment(refund).subscribe(
        data => {
          this.toastr.success('Refund request submitted successfully.');
          this.router.navigate(['/refunds']);
        },
        error => {
          this.toastr.error('Failed to create refund.');
        }
      );
    }
  }


  cancel() {
    this.paymentForm.reset();
    this.router.navigate(['/payments']);
  }
}