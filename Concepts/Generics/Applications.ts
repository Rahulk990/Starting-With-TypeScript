
// Generic Functions
function addOrMerge<T extends number | string>(item1: T, item2: T): T {
  return item1 + item2;
}

console.log(addOrMerge<number>(1, 2));
console.log(addOrMerge("Add", " Merge"));


// Generic types can also extend interfaces
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Hello", "World"]));


// KeyOf constraints with generic types
function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extract({ name: "Alex" }, "name"));


// Generic Classes
class DataStore<T> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStore = new DataStore<string>();
textStore.addItem("Hello");
console.log(textStore.getItems());

const numberStore = new DataStore<number>();
numberStore.addItem(12);
console.log(numberStore.getItems());
