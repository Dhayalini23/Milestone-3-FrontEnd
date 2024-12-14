import { Component } from '@angular/core';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrl: './admin-dash-board.component.css'
})
export class AdminDashBoardComponent {
  overDueMembers:any;
  constructor(private paymentService:PaymentService){}
  overDue() {
    this.paymentService.getoverdueMembers().subscribe(data => {
      this.overDueMembers = data;
    });
  }
}
