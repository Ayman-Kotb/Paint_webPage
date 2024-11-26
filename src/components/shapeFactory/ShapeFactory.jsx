import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";
import Poly from "../shapes/Polygon.jsx";
import Square from "../shapes/Square.jsx";

class ShapeFactory {
    createShape(shape,options){
        switch (shape){
            case "circle":
                return new myCircle(options)
            case "line":
                return new myLine(options)
            case "rectangle":
                return new Rectangle(options)
            case "triangle":
                return new myTriangle(options)
            case "polygon":
                return new Poly(options)
            case "square":
                return new Square(options)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory