/*
    Core Data Types
*/
// Only single type for all number formats
var num1 = 5;
var num2 = 2.3;
var num3 = 1e5;
console.log(num1, num2, num3);
// Only single type for all string formats
var str1 = 'Hello';
var str2 = "Hello";
var str3 = "Hello " + num1;
console.log(str1, str2, str3);
// boolean type only supports true and false
// It doesn't support truthy and falsy values
var bool1 = true;
var bool2 = false;
// const bool3: boolean = 0;    --> Error
console.log(bool1, bool2);
// TS can automatically infer data types
// Therefore, it is a good practice to assign types only when not initializing the variable
var data = 5;
var data2 = 5.2; // Type inferred as number
var var1 = 10;
var1 = 'String';
console.log(var1);
