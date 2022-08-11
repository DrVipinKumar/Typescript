"use strict";
exports.__esModule = true;
// const add=(num1:number, num2:number, num3:number):number=>{
//     return num1+num2+num3
// }
function add(num1, num2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
console.log("Sum=", add(12, 34, 86));
var circle = function (_a) {
    var radious = _a.radious;
    return 3.14 * radious * radious;
};
console.log("Area of Circle=", circle({ radious: 8 }));
var multiply = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (p, c) { return p * c; }, 1);
};
console.log(multiply(1, 2, 3, 4, 5, 3));
var even = function (value) { return value % 2 === 0; };
console.log("Is it event number=>", even(24));
