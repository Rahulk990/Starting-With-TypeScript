
/*
    Spread Operator
*/


// With Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(...arr1, arr2);


// With Objects
const obj1 = { objectName: "foo" };
const obj2 = { ...obj1, age: 10 };
console.log(obj1, obj2);



/*
    De-structuring
*/


// With Arrays
let [firstNumber, ...restNumbers] = arr1;
let { objectName: alias, age } = obj2;
console.log(firstNumber, restNumbers, alias, age);
