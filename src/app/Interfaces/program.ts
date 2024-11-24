export interface Program{
    filter(arg0: (a: any) => any): Program[];
    id:string;
    programName:string;
    description:string;
    programStatus:boolean;
    creationDate:string;
    
}