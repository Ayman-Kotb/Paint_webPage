import Circle from "../shapes/Circle.jsx";
import Line from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import TriAngle from "../shapes/triangle.jsx";
import Poly from "../shapes/Polygon.jsx";
import Square from "../shapes/Square.jsx";

class ShapeFactory {
    createShape(shape,options){
        switch (shape){
            case "circle":
                return new Circle(options)
            case "line":
                return new Line(options)
            case "rectangle":
                return new Rectangle(options)
            case "triangle":
                return new TriAngle(options)
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