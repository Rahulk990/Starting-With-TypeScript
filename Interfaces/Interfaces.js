var object = {
    name: "Alex",
    age: 36,
    print: function () {
        console.log(this.age);
    }
};
console.log(object);
object.print();
var Human = /** @class */ (function () {
    function Human() {
        // We will get error, if Name and Age interfaces are not satisfied
        this.name = "Hello";
    }
    return Human;
}());
var human = new Human();
console.log(human);
var add = function (num1, num2) { return num1 + num2; };
console.log(add(1, 2));
