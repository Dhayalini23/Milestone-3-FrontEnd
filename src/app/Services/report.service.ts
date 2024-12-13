import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { annualFinancialReport, memberReport, programReport } from '../Interfaces/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private Http: HttpClient) { }
  api:string='http://localhost:5278/api/Report/'
  programReport(){
    return this.Http.get<programReport[]>(this.api+"Program-Report" );
  }
  memberReport(){
    return this.Http.get<memberReport[]>(this.api+"Member-Report" );
  }
  annualFinancialReport(){
    return this.Http.get<annualFinancialReport[]>(this.api+"Annual-Financial-Report" );
  }

}
