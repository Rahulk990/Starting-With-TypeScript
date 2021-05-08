
/*
    Any Type
*/


// Any type can store any variable
// Not a good practice to use any in code
let var1: any = "String";
var1 = 5;
var1 = [5, 60, [4]];

console.log(var1);



/*
    Union Types
*/


// We can union any number of types in TS
let un1: (number | string) = 5;
un1 = 'string';

console.log(un1);



/*
    Literal Type
*/


// Literal Types tell about the actual values and not just types
let lt1: ('hello' | 'world') = 'hello';
let lt2: (5 | 10) = 10;
lt2 = 5;

// Following code will give error
// lt1 = 'New Value';

console.log(lt1, lt2);



