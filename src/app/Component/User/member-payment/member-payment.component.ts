import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { PaymentHistory, SkippedPayment, UserPayment } from '../../../Interfaces/payment';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-member-payment',
  templateUrl: './member-payment.component.html',
  styleUrl: './member-payment.component.css'
})
export class MemberPaymentComponent implements OnInit{
  Id:string='';
  Payments:PaymentHistory[]=[];
  SkippedPayments:SkippedPayment[]=[];
  constructor(private userService:UserService,private paymentService:PaymentService){
    const storedUserId = localStorage.getItem('UserId');
    if (storedUserId) {
      console.log(storedUserId)
      this.Id=storedUserId;
      
    } else {
      console.warn('No UserId found in localStorage');
    }
  }
  ngOnInit(): void {
    this.paymentService.getUserPaymentHistory(this.Id).subscribe(data=>{
      this.Payments=data;
      console.log(this.Payments)
    })
    this.paymentService.getUserSkippedPayment(this.Id).subscribe(data=>{
      this.SkippedPayments=data;
      console.log(this.SkippedPayments)
    })
  }
}
