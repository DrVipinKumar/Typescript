"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Addition = /** @class */ (function () {
    function Addition(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Addition.prototype.calculation = function () {
        console.log("Addition of ".concat(this.num1, " and ").concat(this.num2, " is = ").concat(this.num1 + this.num2, " "));
    };
    return Addition;
}());
var Multiply = /** @class */ (function (_super) {
    __extends(Multiply, _super);
    function Multiply(num1, num2) {
        return _super.call(this, num1, num2) || this;
    }
    Multiply.prototype.calculation = function () {
        console.log("Multiplication of ".concat(this.num1, " and ").concat(this.num2, " is = ").concat(this.num1 * this.num2, " "));
    };
    return Multiply;
}(Addition));
var add = new Addition(12, 34);
add.calculation();
var mul = new Multiply(34, 56);
mul.calculation();
