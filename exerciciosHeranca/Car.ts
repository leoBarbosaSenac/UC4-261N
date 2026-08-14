import { Vehicle } from "./Vehicle";

export class Car extends Vehicle{

    constructor(speed: number){
        super(speed)
    }

    public getSpeed(): number{
        return this.speed
    }

    public accelerate(acceleration: number, time: number): void{
        this.speed = this.speed + (acceleration * time)
    }
}