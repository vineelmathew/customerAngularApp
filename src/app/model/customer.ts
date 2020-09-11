export class Customer
{
    customerName:string;
    balance:number;
    constructor(customerName:string,balance:number)
    {
        this.balance=balance;
        this.customerName=customerName;
    }
    
    public getBalance() : number {
        return this.balance;
    }
    public getCustomerName():string{
        return this.customerName;
    }
}