export {}
class Addition{
    constructor(public num1:number, public num2:number){}
    calculation(){
        console.log(`Addition of ${this.num1} and ${this.num2} is = ${this.num1+this.num2} `)
    }
}
class Multiply extends Addition {
    constructor(num1:number, num2:number){
        super(num1, num2)
    }
  override calculation(){
        console.log(`Multiplication of ${this.num1} and ${this.num2} is = ${this.num1*this.num2} `)
    }
}
const add =new Addition(12,34)
add.calculation();
const mul =new Multiply(34,56)
mul.calculation();