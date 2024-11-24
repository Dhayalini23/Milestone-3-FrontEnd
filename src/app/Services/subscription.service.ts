import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

 
  constructor(private Http:HttpClient) { }

  getSubscription(){
    return this.Http.get<Subscription[]>('http://localhost:5198/api/Users');
  }
  createSubscription(subscription:any){
    return this.Http.post('http://localhost:5198/api/Users',subscription);
   }
  deleteSubscription(subscriptionId:string){
    return this.Http.delete('http://localhost:5198/api/Users/'+ subscriptionId);
   }
   updateSubscription(subscription:Subscription,subscriptionId:string){
    return this.Http.put('http://localhost:5198/api/Users/'+ subscriptionId,subscription);
   }
   getSubscriptionById(subscriptionId : string){
    return this.Http.get<Subscription>('http://localhost:5198/api/Users/' + subscriptionId);
  }
}
