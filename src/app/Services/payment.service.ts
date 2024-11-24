import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../Interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private Http:HttpClient) { }

  getPayment(){
    return this.Http.get<Payment[]>('http://localhost:5278/api/Admin/GetAllPrograms');
  }
  createPayment(payment:any){
    return this.Http.post('http://localhost:5278/api/Admin/GetAllPrograms',payment);
   }
  deletePayment(paymentId:string){
    return this.Http.delete('http://localhost:5278/api/Admin/GetAllPrograms/'+ paymentId);
   }
   updatePayment(payment:any,paymentId:string){
    return this.Http.put('http://localhost:5278/api/Admin/GetAllPrograms/'+ paymentId,payment);
   }
   getPaymentById(paymentId : string){
    return this.Http.get<any>('http://localhost:5278/api/Admin/GetAllPrograms/' + paymentId);
  }
}
