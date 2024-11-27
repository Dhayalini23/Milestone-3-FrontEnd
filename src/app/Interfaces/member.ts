export interface Member{
    filter(arg0: (a: any) => any): Member[];
 id:number;
 userId:string;
 profileImage:string;
 firstName:string;
 lastName:string;
 gender:string;
 height:number;
 weight:number;
 email:string;
 age:number;
 dob:string;
 nicNo:string;
 contactNo:string;
 address:string;
}
// export interface User{
//     userId:number;
//     password:string;
// }
