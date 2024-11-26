export interface Program{
    filter(arg0: (a: any) => any): Program[];
    id:number;
    programName:string;
    description:string;
    programStatus:boolean;
    creationDate:string;
    
}
export interface WorkOutProgram{
    id:number;
    name:string;
    description:string;
}