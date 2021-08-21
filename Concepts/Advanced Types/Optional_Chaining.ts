/*
    Optional Chaining
*/

// Used when we dont know whether certain property will exist or not
const userData1 = {
  id: 1231,
  name: "Foo",
  job: { title: "CEO", description: "My own company" },
};

const userData2 = {
  id: 1231,
  name: "Foo",
  job: { description: "Nothing" },
};

console.log(userData1?.job?.title);
// console.log(userData2?.job?.title);     // This inference may not be present in real case


/*
    Nullish Coalescing
*/

// Used to assign default values if the variable is Null or Undefined
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

// More Strictly when variable is Nullish
const userInput1 = '';
const storedData1 = userInput1 || 'DEFAULT';
console.log(storedData1);
