export interface Program{
    filter(arg0: (a: any) => any): Program[];
    id:number;
    programName:string;
    description:string;
    programStatus:boolean;
    creationDate:string;
    
}