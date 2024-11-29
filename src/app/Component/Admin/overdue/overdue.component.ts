import { Component } from '@angular/core';
import { PaymentService } from '../../../Services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrl: './overdue.component.css'
})
export class OverdueComponent {

  overDues: OverdueComponent[] = [];
  searchText: any;
  selectedMember: any;
  showMemberDetails: any;

  constructor(private paymentService: PaymentService, 
    private toastr: ToastrService, 
    private router:Router
  ) { }

  // ngOnInit(): void {
  //   this.loadOverdue();
  // }
  // loadOverdue(){

  //   this.paymentService.getPayment().subscribe(data =>{
  //     console.log(data);  
  //     this.overDues = data;
  //   }, error => {
  //     this.toastr.error("Failed to load overdue", "Error");
  //   });
  // }
}
