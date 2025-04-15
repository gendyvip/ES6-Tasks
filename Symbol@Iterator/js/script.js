//a- Generator iterate on array and returns elements of array
let fruits = ["strawberry", "mango", "banana"];
let friends = ["mona", "samy", "ali"];
fruits[Symbol.iterator] = iterateArray;
friends[Symbol.iterator] = iterateArray;
function* iterateArray() {
  for (let i = 0; i < this.length; i++) {
    yield this[i];
  }
}
for (let fruit of fruits) {
  console.log(fruit);
}
console.log("=============");
for (let friend of friends) {
  console.log(friend);
}

console.log("***************************");

//b- Iterator iterate on object and returns elements of object
let fruitObject = {
  name: "strawberry",
  count: 15,
  price: 80,
};

let friendObject = {
  fname: "Mona",
  age: 25,
  address: "Alex",
};
fruitObject[Symbol.iterator] = iterateObject;
friendObject[Symbol.iterator] = iterateObject;
function iterateObject() {
  let values = Object.values(this);
  let i = 0;
  return {
    next: function () {
      if (i < values.length) {
        return { value: values[i++], done: false };
      } else return { value: undefined, done: true };
    },
  };
}

for (let fruitDetails of fruitObject) {
  console.log(fruitDetails);
}
console.log("=============");
for (let friendDetails of friendObject) {
  console.log(friendDetails);
}
