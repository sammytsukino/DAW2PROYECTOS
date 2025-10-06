import Rectangle from "./objetosMetodosClases.js";

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}

export default Square;

const square = new Square(20);
console.log('Area del cuadrado: ', square.calculateArea());