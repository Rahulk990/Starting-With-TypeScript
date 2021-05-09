/*
    Any Type
*/
// Any type can store any variable
// Not a good practice to use any in code
var var1 = "String";
var1 = 5;
var1 = [5, 60, [4]];
console.log(var1);
/*
    Union Types
*/
// We can union any number of types in TS
var un1 = 5;
un1 = 'string';
console.log(un1);
/*
    Literal Type
*/
// Literal Types tell about the actual values and not just types
var lt1 = 'hello';
var lt2 = 10;
lt2 = 5;
// Following code will give error
// lt1 = 'New Value';
console.log(lt1, lt2);
/*
    Unknown Type
*/
// Same as any type, but cannot be assigned without type checking
var unk1;
var str = "Hello";
unk1 = 5;
unk1 = "Name";
// str = unk1;      --> Error
if (typeof unk1 === "string") {
    str = unk1;
}
console.log(str, unk1);
