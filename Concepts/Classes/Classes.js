// Defining Class
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.age = 10;
    }
    Student.prototype.printName = function () {
        console.log(this.name, this.age);
    };
    return Student;
}());
// Creating Objects
var st1 = new Student("Foo");
console.log(st1);
st1.printName();
// Shorthand Initializations
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var emp1 = new Employee("Foo", 25);
console.log(emp1);
console.log(emp1.age);
// Getters and Setters
// Only available with ES6+
/*
    class Parent {
    constructor(public name: string, private age: number) {}

    get Age() {
        return this.age;
    }

    set Age(value: number) {
        this.age = value;
    }
    }

    const parent1 = new Parent("Foo", 25);
    parent1.Age = 10;
    console.log(parent1.Age);
*/
// Static Properties and Methods
var Car = /** @class */ (function () {
    function Car() {
        Car.count++;
    }
    Car.Counter = function () {
        console.log(this.count);
    };
    Car.count = 0;
    return Car;
}());
var car1 = new Car();
var car2 = new Car();
console.log(Car.count);
