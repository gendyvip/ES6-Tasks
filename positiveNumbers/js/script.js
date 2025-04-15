let arr = [1, 2, -5, 10, -3, 50, -100, 508];
let positiveNumbers = (arr) => {
  return arr.filter((number) => number > 0);
};
console.log(positiveNumbers(arr));
