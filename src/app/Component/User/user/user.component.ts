import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../../../Services/payment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  id:any;
  userId:any
  constructor(private router:Router,    private toastr: ToastrService, private paymentService:PaymentService
  ){}
  ngOnInit(): void {
    this.id=localStorage.getItem('Id');
    this.userId=localStorage.getItem('UserId');
    if(this.id == null){
      this.router.navigate(['/'])
    }
    this.paymentService.getoverdueMembers().subscribe(data => {
      const member=data.filter(i=>i.id==this.userId);
      if(member != null){
        this.toastr.error("User have over due payments to pay please kindly the corresponding with admin");
      }
    });
  }
  navigateHome(){
    this.router.navigate([`/user/:`+this.id]).catch((error) => {
      console.error("Navigation error: ", error);
    })
  }

  logOut(){
    localStorage.removeItem('UserId');
    localStorage.removeItem('Id');
    this.router.navigate(['/'])
  }

}
