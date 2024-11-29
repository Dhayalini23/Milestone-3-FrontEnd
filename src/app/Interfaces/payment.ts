export interface Payment{
    filter(arg0: (a: any) => any): Payment[];
    id:string;
    name:string;
    nicNumber:string;
    contactNo:string;
    dueDate:string;

}

export interface Refund{
    memberId: number;
    reason: string;
    amount: number;
}

export interface SkippedPayment{
    id:string;
    startDate:string;
    endDate:string;
    reason:string;
}
export interface Overdue{
    memberId:string;
    programId:string;
    subscriptionType:string;
    dueDate:string;
}