import { Component, OnInit } from '@angular/core';
import { Payment, PaymentHistory, SkippedPayment } from '../../../Interfaces/payment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PaymentService } from '../../../Services/payment.service';
import { MemberService } from '../../../Services/member.service';
import { Member } from '../../../Interfaces/member';
import { EnrollmentService } from '../../../Services/enrollment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  members: Member[] = []
  memberId:number=0;
  overDueMembers: any;
  payments: Payment[] = [];
  filteredPayments: Payment[] = [];
  searchText: string = '';
  Payments: PaymentHistory[] = [];
  SkippedPayments: SkippedPayment[] = [];
  workoutPrograms:any;


  constructor(
    private paymentService: PaymentService,
    private memberService: MemberService,
    private enrollmentService: EnrollmentService,
    // private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadMembers();
  }


  loadMembers(): void {
    this.memberService.getMember().subscribe(data => {
      console.log(data);
      this.members = data;
    }, error => {
      // this.toastr.error("Failed to load members", "Error");
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



  overDue() {
    this.paymentService.getoverdueMembers().subscribe(data => {
      this.overDueMembers = data;
    });
  }
  paymentHistory(id: number) {
    const memId=id.toString();
    this.paymentService.getUserPaymentHistory(memId).subscribe(data => {
      this.Payments = data;
      console.log(this.Payments)
    })
    this.paymentService.getUserSkippedPayment(memId).subscribe(data => {
      this.SkippedPayments = data;
      console.log(this.SkippedPayments)
    })
  }

  pay(id :number){
    this.memberId=id;
    this.enrollmentService.getMemberEnrolledPrograms(id).subscribe(i=>{
      this.workoutPrograms=i;
      console.log(this.workoutPrograms); 
    })
  }

  userPay(id :number){
    const AddMember={
      memberId:this.memberId,
      programPaymentId:id
    }
    console.log(AddMember)
    this.paymentService.createPayment(AddMember).subscribe(data => {
      console.log(data);
      // this.toastr.success("Payment is completed successfully");
    });
    location.reload();
  }
}


// Add Refund payment

