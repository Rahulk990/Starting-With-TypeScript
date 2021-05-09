/*
    Spread Operator
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// With Arrays
var arr1 = [1, 2, 3];
var arr2 = __spreadArray(__spreadArray([], arr1), [4, 5]);
console.log.apply(console, __spreadArray(__spreadArray([], arr1), [arr2]));
// With Objects
var obj1 = { objectName: "foo" };
var obj2 = __assign(__assign({}, obj1), { age: 10 });
console.log(obj1, obj2);
/*
    De-structuring
*/
// With Arrays
var firstNumber = arr1[0], restNumbers = arr1.slice(1);
var alias = obj2.objectName, age = obj2.age;
console.log(firstNumber, restNumbers, alias, age);
