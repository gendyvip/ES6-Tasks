let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a- Testing each elements is a string
let isString = fruits.every((fruit) => typeof fruit === "string");
console.log("a- Testing each elements is a string");
console.log(isString);
console.log("==========================");

//a- Testing some of elements starts with "a"
let startsWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log("b- Testing some of elements starts with 'a'");
console.log(startsWithA);
console.log("==========================");

//c- Fitler array elements starts with "b" or "s"
let filteredFruits = fruits.filter((fruit) => {
  return fruit.startsWith("b") || fruit.startsWith("s");
});
console.log("c- Fitler array elements starts with 'b' or 's'");
console.log(filteredFruits);
console.log("==========================");

//d- Display favourite fruits
let favFruits = fruits.map((fruit) => {
  return `I love ${fruit}`;
});
console.log("d- Favourite Fruits");
console.log(favFruits);
console.log("==========================");

//e- Display elements from poimt "d"
console.log("e- Display elemetns from point 'd'");
favFruits.forEach((fruit) => {
  console.log(fruit);
});
console.log("==========================");
