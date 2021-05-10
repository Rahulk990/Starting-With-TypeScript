/*
    Property Decorators
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Simple Decorator
function Logger(target, propertyName) {
    console.log("In Logger");
    console.log(target, propertyName);
}
// Applying Decorator
var Student1 = /** @class */ (function () {
    function Student1(name) {
        this.name = name;
    }
    Student1.prototype.setName = function (value) {
        this.name = value;
    };
    __decorate([
        Logger
    ], Student1.prototype, "name");
    return Student1;
}());
var st11 = new Student1("Alex");
console.log(st11);
/*
    Accessor and Parameter Decorators
*/
// Simple Decorators
function MethodDecorator(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function ParameterDecorator(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
// Applying Decorator
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("Invalid price - should be positive!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        MethodDecorator
    ], Product.prototype, "price");
    __decorate([
        MethodDecorator,
        __param(0, ParameterDecorator)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
var pd1 = new Product("Book", 19);
var pd2 = new Product("Book 2", 29);
