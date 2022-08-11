"use strict";
exports.__esModule = true;
function add(num1, num2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
console.log("Sum=", add(12, 34));
console.log("Sum=", add(12, 564, 890.9));
var circle = function (_a) {
    var radious = _a.radious;
    return 3.14 * radious * radious;
};
console.log("Circle Radious", circle({ radious: 8 }));
function multiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (p, c) { return p * c; }, 0);
}
console.log(multiply(1, 2, 3, 4));
var evenCheck = function (num) { return num % 2 == 0; };
console.log("Is it event number=", evenCheck(23));
