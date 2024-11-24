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