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
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.l = l;
        this.b = b;
    }
    Rectangle.prototype.getArea = function () {
        return this.l * this.b;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(l) {
        return _super.call(this, l, l) || this;
    }
    return Square;
}(Rectangle));
var rec = new Rectangle(15, 34);
console.log("Area of Rectangle =", rec.getArea());
//rec.message();
var sqr = new Square(10);
console.log("Area of Square=", sqr.getArea());
