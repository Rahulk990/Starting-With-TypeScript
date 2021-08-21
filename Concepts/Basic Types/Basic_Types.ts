
/* 
    Core Data Types
*/


// Only single type for all number formats
const num1: number = 5;     
const num2: number = 2.3;
const num3: number = 1e5;
console.log(num1, num2, num3);


// Only single type for all string formats
const str1: string = 'Hello';
const str2: string = "Hello";
const str3: string = `Hello ${num1}`;
console.log(str1, str2, str3);


// boolean type only supports true and false
// It doesn't support truthy and falsy values
const bool1: boolean = true;
const bool2: boolean = false;
// const bool3: boolean = 0;    --> Error
console.log(bool1, bool2);


// TS can automatically infer data types
// Therefore, it is a good practice to assign types only when not initializing the variable
let data: number = 5;
let data2 = 5.2;              // Type inferred as number



/*
    Type Alias
*/


// Custom Type Aliases can be created for any type setup
type newType = number | string | boolean;
let var1: newType = 10;
var1 = 'String';

console.log(var1);