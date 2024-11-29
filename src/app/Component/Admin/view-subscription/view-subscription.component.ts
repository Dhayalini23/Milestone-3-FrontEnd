import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../Services/subscription.service';
import { Subscription } from '../../../Interfaces/subscription';

@Component({
  selector: 'app-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrl: './view-subscription.component.css'
})
export class ViewSubscriptionComponent {
 
  subscription!:Subscription;
  subscriptionid:string|undefined;
  constructor(private route: ActivatedRoute, private router: Router,private subscriptionService :SubscriptionService,private toastr:ToastrService){
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  this.subscriptionid = String(id);
}


ngOnInit(): void {
  if(this.subscriptionid != undefined){
    this.subscriptionService.getSubscriptionById(this.subscriptionid).subscribe(data => {
      // data.title = new Date(data.title).toISOString().slice(0, 10);
      this.subscription = data;
      console.log(data)
    }, (error) => {
      this.toastr.warning("Subscription is not found!: " + error.error.title);
    });
  }
}
loadMembers(){

  this.subscriptionService.getSubscription().subscribe(data =>{
    console.log(data);
    // this.subscriptions = data;
  })
}

onClose(){
  
}
}
