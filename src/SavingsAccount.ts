import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount{
    constructor(){
        super()
    }

    public applyInterestEarned(interestTax: number): void{
        this.updateBalance((this.getBalance() * interestTax) / 100)
    }

    
    public getBalance(): number{
        return this.balance
    }
}