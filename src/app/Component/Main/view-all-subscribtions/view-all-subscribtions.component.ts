import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../Services/subscription.service';
import { Subscription } from '../../../Interfaces/subscription';

@Component({
  selector: 'app-view-all-subscribtions',
  templateUrl: './view-all-subscribtions.component.html',
  styleUrl: './view-all-subscribtions.component.css'
})
export class ViewAllSubscribtionsComponent  implements OnInit{
  subscriptions:any[]=[];
constructor(private subscriptionService :SubscriptionService){

}
ngOnInit(): void {
  this.subscriptionService.getSubscription().subscribe(data =>{
    console.log(data);
    
    this.subscriptions = data;
})
}
}
