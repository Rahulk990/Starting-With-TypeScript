/*
    Arrow Functions
*/
// Another way of defining functions
var add1 = function (num1, num2) {
    return num1 + num2;
};
// In case of just returning an expression
var add2 = function (num1, num2) { return num1 + num2; };
console.log(add1(4, 5), add2(3, 4));
// In case of single parameter
// Generally, for callback functions
var add3 = function (num1) { return num1 + 3; };
console.log(add3(4));
// Default Parameters
var add4 = function (a, b) {
    if (b === void 0) { b = 4; }
    return (a + b);
};
console.log(add4(5));
// Rest Parameters
// These are used to pass any number of parameters to the functions for flexibility
var add5 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curr, num) {
        return curr + num;
    }, 0);
};
console.log(add5(1e2, 2, 4.2, 7, 8));
