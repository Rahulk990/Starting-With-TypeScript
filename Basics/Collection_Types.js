/*
    Object Types
*/
// Object type is used to infer the JSON objects
var obj1 = { name: "Alex" };
var obj2 = { name: "Alex" };
// Above syntax is not useful, we can have more specific code
var obj3 = { name: "Alex" };
// Or we can let TS infer itself
var obj4 = { name: "Alex" };
console.log(obj1, obj2, obj3, obj4);
/*
    Array Types
*/
// Flexible Type, that can store any type of items
var arr1 = ["string", 5, obj1];
// Array Types can be more specific
var arr2 = ["str", "string"];
var arr3 = ["string", 5];
console.log(arr1, arr2, arr3);
/*
    Tuple Type
*/
// Tuple is fixed length array with fixed types
// This type is not there in vanilla JS
// It needs to be set explicitly else inferred as Array by TS
var tup1 = ['string', 5];
// Thus, below codes will give error
// tup1 = ['string', 5, 10];
// tup1 = [5];
// tup1[0] = 5;
// Pushing to Tuple is an exception
tup1.push('Anything');
console.log(tup1);
/*
    Enum Type
*/
// Enum is a collection of numbers in human readable form
// Enum type is not present in vanilla JS
// Good practice to ues them in code to increase readability
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["red"] = 0] = "red";
    ColorEnum[ColorEnum["green"] = 1] = "green";
    ColorEnum[ColorEnum["blue"] = 2] = "blue";
})(ColorEnum || (ColorEnum = {}));
;
var ColorEnum2;
(function (ColorEnum2) {
    ColorEnum2[ColorEnum2["red"] = 5] = "red";
    ColorEnum2[ColorEnum2["green"] = 6] = "green";
    ColorEnum2[ColorEnum2["blue"] = 10] = "blue";
})(ColorEnum2 || (ColorEnum2 = {}));
;
console.log(ColorEnum, ColorEnum2);
console.log(ColorEnum.red, ColorEnum.green, ColorEnum.blue);
console.log(ColorEnum2.red, ColorEnum2.green, ColorEnum2.blue);
/*

*/
