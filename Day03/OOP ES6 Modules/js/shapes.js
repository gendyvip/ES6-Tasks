class Shape {
  constructor(shape) {
    this.shape = shape;
  }
  area() {
    return "Area of";
  }
  parameter() {
    return "Parameter of";
  }
  toString() {
    return "";
  }
}

class Rectangle extends Shape {
  constructor(shape, l, w) {
    super(shape);
    this.l = l;
    this.w = w;
  }
  area() {
    return this.l * this.w;
  }
  parameter() {
    return (this.l + this.w) * 2;
  }
  toString(area, parameter) {
    return `${super.area()} ${this.shape} is ${area}
${super.parameter()} ${this.shape} is ${parameter}`;
  }
}

class Square extends Shape {
  constructor(shape, l) {
    super(shape);
    this.l = l;
  }
  area() {
    return this.l * this.l;
  }
  parameter() {
    return this.l * 4;
  }
  toString(area, parameter) {
    return `${super.area()} ${this.shape} is ${area}
${super.parameter()} ${this.shape} is ${parameter}`;
  }
}

class Circle extends Shape {
  constructor(shape, r) {
    super(shape);
    this.r = r;
  }
  area(r) {
    return (Math.PI * this.r * this.r).toFixed(2);
  }
  parameter(r) {
    return (Math.PI * this.r * 2).toFixed(2);
  }
  toString(area, parameter) {
    return `${super.area()} ${this.shape} is ${area}
${super.parameter()} ${this.shape} is ${parameter}`;
  }
}
export { Shape, Rectangle, Square, Circle };
