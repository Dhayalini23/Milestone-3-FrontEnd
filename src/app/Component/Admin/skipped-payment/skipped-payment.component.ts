import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../../../Services/payment.service';
import { SkippedPayment } from '../../../Interfaces/payment';

@Component({
  selector: 'app-skipped-payment',
  templateUrl: './skipped-payment.component.html',
  styleUrl: './skipped-payment.component.css'
})
export class SkippedPaymentComponent {

  paymentForm!: FormGroup;
  isEditMode: boolean = false;
  refundId: string | null = null;  

  constructor(
    private fb: FormBuilder,
    private skippedPaymentService: PaymentService,
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
    this.skippedPaymentService.getPaymentById(refundId).subscribe(data => {
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

    const refund: SkippedPayment = this.paymentForm.value; 

    if (this.isEditMode) {
     
      this.skippedPaymentService.updatePayment(refund, this.refundId!).subscribe(
        data => {
          this.toastr.success('Refund updated successfully.');
          this.router.navigate(['/refunds']);
        },
        error => {
          this.toastr.error('Failed to update refund.');
        }
      );
    } else {
    
      this.skippedPaymentService.createPayment(refund).subscribe(
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
