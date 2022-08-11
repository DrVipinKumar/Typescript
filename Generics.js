"use strict";
exports.__esModule = true;
//generic programming using function
// function addition<S,T>(num1:S, num2:T){
//     if (typeof num1==="number" && typeof num2==="number"){
//         return num1+num2
//     }
//     return num1+" "+num2;
// }
// interface value<S,T>{
//     num1:S
//     num2:T
// }
// function addition<S,T>(this:value<S,T>){
//       if (typeof this.num1==="number" && typeof this.num2==="number"){
//                 return this.num1+this.num2
//             }
//             return this.num1+" "+this.num2;
// }
var Calculation = /** @class */ (function () {
    function Calculation(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculation.prototype.getCalculation = function () {
        if (typeof this.num1 === "number" && typeof this.num2 === "number") {
            return this.num1 + this.num2;
        }
        return this.num1 + " " + this.num2;
    };
    return Calculation;
}());
var cal = new Calculation(23, 56);
console.log("Sum of 2 number", cal.getCalculation());
var cal1 = new Calculation("Dr. Vipin", "Classes");
console.log("Concatination of string =", cal1.getCalculation());
var value = { value: 22 };
console.log(value.value);
