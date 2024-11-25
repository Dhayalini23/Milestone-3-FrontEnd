import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../Interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  api:string="http://localhost:5278/api/";
  constructor(private Http:HttpClient) { }

  getPayment(){
    return this.Http.get<Payment[]>(this.api+'');
  }
  createPayment(payment:any){
    return this.Http.post(this.api+'',payment);
   }
  deletePayment(paymentId:string){
    return this.Http.delete(this.api+''+ paymentId);
   }
   updatePayment(payment:any,paymentId:string){
    return this.Http.put(this.api+''+ paymentId,payment);
   }
   getPaymentById(paymentId : string){
    return this.Http.get<any>(this.api+'' + paymentId);
  }
}
