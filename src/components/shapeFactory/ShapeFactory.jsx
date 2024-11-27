import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape( {shape , color , radius , width , height}){
        switch (shape){
            case "circle":
                return new myCircle().create(color ,radius)
            case "line":
                return new myLine()
            case "rectangle":
                return new Rectangle().create(color,width,height)
            case "triangle":
                return new myTriangle().create(color,width,height)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory