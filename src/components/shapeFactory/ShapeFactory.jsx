import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape( {shape , color , radius , width ,strokeWidth , height , fillColor , x1 ,y1 ,x2 ,y2}){
        switch (shape){
            case "circle":
                if (radius ===0)return new myCircle().create(color)
                else return new myCircle().create(color ,radius, strokeWidth , fillColor)
            case "line":
                return new myLine().create(color, strokeWidth , x1, y1, x2, y2)
            case "rectangle":
                if (width ===0 || height ===0) return new Rectangle().create(color)
                else return new Rectangle().create(color, width , height, strokeWidth , fillColor)
            case "triangle":
                if (width ===0 || height ===0) return new myTriangle().create(color)
                else return new myTriangle().create(color, width , height, strokeWidth , fillColor)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory