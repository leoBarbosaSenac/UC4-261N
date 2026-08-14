export class BankAccount{
    protected balance: number

    constructor(){
        this.balance = 100
    }

    protected updateBalance(value: number){
        this.balance += value
    }

    
}