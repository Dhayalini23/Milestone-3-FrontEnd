export interface Subscription{
    // filter(arg0: (a: any) => any): Subscription[];
    id:string;
    title:string;
    description:string;
    duration:number;
    isSpecialOffer:boolean;
    paymentType:string;
    paymentDate:number;
    userCanPay:boolean;

}