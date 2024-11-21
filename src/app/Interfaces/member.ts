export interface Member{
    filter(arg0: (a: any) => any): Member[];
 id:number;
 name:string;
 email:string;
 password:string;
 phone:string;
 address?:Address;
}
export interface Address{
    id:number;
    addressLine1:string;
    addressLine2:string;
    city:string;
  }