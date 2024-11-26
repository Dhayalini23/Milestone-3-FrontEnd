export interface Program{
    filter(arg0: (a: any) => any): Program[];
    id:string;
    name:string;
    description:string;
    images:string;
    // programStatus:boolean;
    // creationDate:string;
    
}
export interface WorkOutProgram{
    id:number;
    name:string;
    description:string;
}