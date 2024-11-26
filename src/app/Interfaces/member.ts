export interface Member{
    filter(arg0: (a: any) => any): Member[];
 id:string;
 userId:string;
 profileImage:string;
 firstName:string;
 lastName:string;
 gender:string;
 height:string;
 weight:string;
 email:string;
 age:string;
 dob:string;
 nicNo:string;
 contactNo:string;
 address:string;
}
export interface User{
    userId:number;
    password:string;
}
