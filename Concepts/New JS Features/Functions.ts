
/*
    Arrow Functions
*/


// Another way of defining functions
const add1 = (num1: number, num2: number) => {
  return num1 + num2;
};


// In case of just returning an expression
const add2 = (num1: number, num2: number) => num1 + num2;
console.log(add1(4, 5), add2(3, 4));


// In case of single parameter
// Generally, for callback functions
const add3: (a: number) => number = (num1) => num1 + 3;
console.log(add3(4));


// Default Parameters
const add4 = (a: number, b: number = 4) => a + b;
console.log(add4(5));


// Rest Parameters
// These are used to pass any number of parameters to the functions for flexibility
const add5 = (...numbers: number[]) => {
  return numbers.reduce((curr, num) => {
    return curr + num;
  }, 0);
};

console.log(add5(1e2, 2, 4.2, 7, 8));
