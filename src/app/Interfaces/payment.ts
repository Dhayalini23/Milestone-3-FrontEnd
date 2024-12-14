export interface Payment{
    filter(arg0: (a: any) => any): Payment[];
    id:string;
    name:string;
    nicNumber:string;
    contactNo:string;
    dueDate:string;

}
export interface AddPayment{
    memberId:number;
    programPaymentId:number;
}

export interface UserPayment{
    memberId:number;
    date:Date;
    amount:number;
    programName:string;
    paymentType:string;
}

export interface Refund{
    memberId: number;
    reason: string;
    amount: number;
}

export interface PaymentHistory{
    date:Date;
    amount:number;
    reason:string;
    memberId:number;
    isRefund:boolean;
}




export interface SkippedPayment{
    memberId:string;
    startDate:string;
    endDate:string;
    reason:string;
    programName:string;
}
export interface Overdue{
    memberId:string;
    programId:string;
    subscriptionType:string;
    dueDate:string;
}