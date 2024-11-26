import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Program, WorkOutProgram } from '../Interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  API:string='http://localhost:5278/api/'
  constructor(private Http:HttpClient) { }
  getAllWorkoutPrograms(){
    return this.Http.get<WorkOutProgram[]>(this.API+'Admin/GetAllPrograms');
  }
  getProgram(){
    return this.Http.get<Program[]>('http://localhost:5198/api/Users');
  }
  createProgram(program:any){
    return this.Http.post('http://localhost:5198/api/Users',program);
   }
  deleteProgram(programId:number){
    return this.Http.delete('http://localhost:5198/api/Users/'+ programId);
   }
   updateProgram(program:Program,programId:number){
    return this.Http.put('http://localhost:5198/api/Users/'+ programId,program);
   }
   getprogramById(programId : number){
    return this.Http.get<Program>('http://localhost:5198/api/Users/' + programId);
  }
}
