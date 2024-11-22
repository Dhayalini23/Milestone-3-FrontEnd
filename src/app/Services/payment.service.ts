import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../Interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private Http:HttpClient) { }

  getPayment(){
    return this.Http.get<Payment[]>('http://localhost:5198/api/Users');
  }
  createPayment(payment:any){
    return this.Http.post('http://localhost:5198/api/Users',payment);
   }
  deletePayment(paymentId:number){
    return this.Http.delete('http://localhost:5198/api/Users/'+ paymentId);
   }
   updatePayment(payment:any,paymentId:number){
    return this.Http.put('http://localhost:5198/api/Users/'+ paymentId,payment);
   }
   getPaymentById(paymentId : number){
    return this.Http.get<any>('http://localhost:5198/api/Users/' + paymentId);
  }
}
