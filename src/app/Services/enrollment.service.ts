import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  api='http://localhost:5278/api/Admin/';
  constructor(private Http: HttpClient) { }
  getEnrollablePrograms(memberId : number){
    return this.Http.get<any>(this.api+'Get-Member-Enrollable-Programs/'+memberId );
  }
}
