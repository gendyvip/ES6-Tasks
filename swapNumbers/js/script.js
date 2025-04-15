let obj = { a: 20, b: 10 };
console.log(obj.b, obj.a);
let { b: a, a: b } = obj;
console.log(b, a);
