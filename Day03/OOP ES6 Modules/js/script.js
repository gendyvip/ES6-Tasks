import { Rectangle, Square, Circle } from "./shapes.js";

let rect = new Rectangle("Rectangle", 3, 4);
let rectArea = rect.area();
let rectParameter = rect.parameter();
console.log(rect.toString(rectArea, rectParameter));

let square = new Square("Square", 5);
let squareArea = square.area();
let squareParameter = square.parameter();
console.log(square.toString(squareArea, squareParameter));

let circle = new Circle("Circle", 5);
let circleArea = circle.area();
let circleParameter = circle.parameter();
console.log(circle.toString(circleArea, circleParameter));
