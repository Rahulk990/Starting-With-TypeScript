/*
    Decorators
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Simple Decorator
function Logger(_) {
    console.log("In Logger Decorator");
}
// Attaching the Decorator
var Person = /** @class */ (function () {
    function Person() {
        this.name = "John";
    }
    Person = __decorate([
        Logger
    ], Person);
    return Person;
}());
// Decorators are called while classes are defined, not instantiated
var p1 = new Person();
console.log(p1);
/*
    Decorator Factory
*/
// Used to create configurable decorators
function ConfigurableDecorator(config) {
    return function (_) {
        console.log("In Configurable Decorator");
        console.log(config);
    };
}
// Applying Configurations
var Student = /** @class */ (function () {
    function Student() {
        this.name = "Alex";
    }
    Student = __decorate([
        Logger,
        ConfigurableDecorator({
            target: "Hello"
        })
    ], Student);
    return Student;
}());
var st1 = new Student();
console.log(st1);
