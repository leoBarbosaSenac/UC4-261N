import { Car } from "./Car"
import { SavingsAccount } from "./SavingsAccount"

// let car1 = new Car(0)

// car1.accelerate(25, 5)
// console.log(car1.getSpeed())

let account1: SavingsAccount = new SavingsAccount()

account1.applyInterestEarned(10)
console.log(account1.getBalance())

account1.updateBalance(10)

