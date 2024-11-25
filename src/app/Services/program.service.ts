import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Program } from '../Interfaces/program';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private Http:HttpClient) { }

  getProgram(){
    return this.Http.get<Program[]>('http://localhost:5198/api/Users');
  }
  createProgram(program:any){
    return this.Http.post('http://localhost:5198/api/Users',program);
   }
  deleteProgram(programId:string){
    return this.Http.delete('http://localhost:5278/api/Admin/Add-Program/'+ programId);
   }
   updateProgram(program:Program,programId:string){
    return this.Http.put('http://localhost:5198/api/Users/'+ programId,program);
   }
   getprogramById(programId : string){
    return this.Http.get<Program>('http://localhost:5198/api/Users/' + programId);
  }
}
