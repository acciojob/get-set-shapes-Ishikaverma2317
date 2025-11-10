// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class inheriting from Rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // call parent constructor with equal width and height
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width;
  }
}

// ✅ Example usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // 5
console.log(rectangle.height); // 10
console.log(rectangle.getArea()); // 50

const square = new Square(7);
console.log(square.width); // 7
console.log(square.height); // 7
console.log(square.getArea()); // 49
console.log(square.getPerimeter()); // 28

// Make the classes accessible for testing
window.Rectangle = Rectangle;
window.Square = Square;
