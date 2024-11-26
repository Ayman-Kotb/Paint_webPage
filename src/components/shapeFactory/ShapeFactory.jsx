import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape(shape){
        switch (shape){
            case "circle":
                return new myCircle()
            case "line":
                return new myLine()
            case "rectangle":
                return new Rectangle()
            case "triangle":
                return new myTriangle()
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory