import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Program, WorkOutProgram } from '../Interfaces/program';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {



  api:string="http://localhost:5278/api/";

  constructor(private Http:HttpClient) { }
  getAllWorkoutPrograms(){
    return this.Http.get<WorkOutProgram[]>(this.api+'Admin/GetAllPrograms');
  }
  getProgram(){
    return this.Http.get<Program[]>(this.api+'Admin/GetAllPrograms');

    
  }
  createProgram(program:any){
    return this.Http.post(this.api+ 'Admin/Add-Program',program);
   }
  deleteProgram(programId:string){
    return this.Http.delete(this.api+'Admin/DeleteProgram'+ programId);
   }
   updateProgram(program:Program,programId:string){
    return this.Http.put(this.api+'Admin/UpdateProgram'+ programId,program);
   }
   getprogramById(programId : string){
    return this.Http.get<Program>(this.api+'Admin/Get-Single-Program' + programId);
  }
}
