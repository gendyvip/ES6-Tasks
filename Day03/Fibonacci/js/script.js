function* fibonacciCount(num) {
  let x = 0,
    y = 1;
  for (let i = 0; i < num; i++) {
    yield x;
    [x, y] = [y, x + y];
  }
}

for (let num of fibonacciCount(7)) {
  console.log(num);
}

console.log("===============");

function* fibonacciMax(num) {
  let x = 0,
    y = 1;
  while (x <= num) {
    yield x;
    [x, y] = [y, x + y];
  }
}

for (let num of fibonacciMax(15)) {
  console.log(num);
}
