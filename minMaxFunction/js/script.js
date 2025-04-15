function minMax(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `Max is: ${max}
-------------------
Min is: ${min}`;
}
console.log(minMax(50, 1, 60, 70, 1000));
