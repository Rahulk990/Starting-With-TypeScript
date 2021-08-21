/*
    Generic Types
*/

// An Array is a built-in generic type
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
console.log(arr1);

// A Promise is a built-in generic type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is a String!");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(" "));
});
