class Shape {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    // prototype methods
    calculateArea() {
        return Math.pow(this.side, 2)
    }
    // prototype methods
    toString() {
        return `side: ${this.side} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}

const square = new Square(4);

console.log(square);
console.log(square.toString());
console.log(square.calculateArea());

console.log(Square.fromArea(64));


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // prototype methods
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }
}
const circle = new Circle(4);

console.log(circle);
console.log(circle.toString());
console.log(circle.calculateArea());

console.log(Circle.fromArea(64));