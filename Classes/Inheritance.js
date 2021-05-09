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
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.printSomething = function () {
        console.log("Parent Class");
    };
    return A;
}());
// Inheritance
// In TS, we can inherit from only one class
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    B.prototype.printSomething = function () {
        console.log("Base Class");
    };
    B.prototype.changeName = function (name) {
        this.name = name;
    };
    return B;
}(A));
var objB = new B("Foo", 25);
objB.changeName("Goo");
console.log(objB);
objB.printSomething();
