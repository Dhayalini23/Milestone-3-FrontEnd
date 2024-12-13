import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../Interfaces/payment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PaymentService } from '../../../Services/payment.service';
import { MemberService } from '../../../Services/member.service';
import { Member } from '../../../Interfaces/member';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  members :Member[]=[]
  payments: Payment[] = []; 
  filteredPayments: Payment[] = []; 
  searchText: string = '';


  constructor(
    private paymentService: PaymentService,
    private memberService:MemberService, 
    private toastr: ToastrService, 
    private router: Router
  ) { }

  ngOnInit(): void {
   
    this.loadMembers();
  }

  
  loadMembers(): void {
    this.memberService.getMember().subscribe(data =>{
      console.log(data);  
      this.members = data;
    }, error => {
      this.toastr.error("Failed to load members", "Error");
    });
  }

  
  onSearch(): void {
    if (this.searchText.trim()) {
    
      this.filteredPayments = this.payments.filter(payment =>
        payment.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        payment.nicNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
        payment.contactNo.includes(this.searchText)
      );
    } else {
  
      this.filteredPayments = [...this.payments];
    }
  }

 
  goToPayment(paymentId: number): void {
    this.router.navigate(['/payment/pay', paymentId]);
  }

  goToPaymentHistory(paymentId: number): void {
    this.router.navigate(['/payment/payment-history', paymentId]);
  }

  // Add Refund payment

}
