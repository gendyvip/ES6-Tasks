let arr = ["test", "best", "chest", "rest", "est", "st", "t"];
let length = 3;
let arrow = (arr, length) => {
  return arr.filter((str) => str.length > length);
};
console.log(arrow(arr, length));
