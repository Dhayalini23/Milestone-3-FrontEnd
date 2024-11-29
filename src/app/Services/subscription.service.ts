import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
api:string="http://localhost:5278/api/";
 
  constructor(private Http:HttpClient) { }

  getSubscription(){
    return this.Http.get<Subscription[]>(this.api+'Admin/GetAllSubscriptions');
  }
  createSubscription(subscription:any){
    return this.Http.post(this.api+ 'Admin/Add-Subscription',subscription);
   }
  deleteSubscription(subscriptionId:string){
    return this.Http.delete(this.api+'Admin/DeleteSubscription'+ subscriptionId);
   }
   updateSubscription(subscription:Subscription,subscriptionId:string){
    return this.Http.put(this.api+'Admin/UpdateSubscription'+ subscriptionId,subscription);
   }
   getSubscriptionById(subscriptionId : string){
    return this.Http.get<any>(this.api+'Admin/GetSingleSubscription' + subscriptionId);
  }
}
