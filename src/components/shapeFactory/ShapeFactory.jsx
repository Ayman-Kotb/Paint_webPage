import myCircle from "../shapes/Circle.jsx";
import myEllipse from "../shapes/Ellipse.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import Square from "../shapes/Square.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape( {shape , color , radius ,rx ,ry,  width ,strokeWidth , height , fillColor , x1 ,y1 ,x2 ,y2 , angle}){
        switch (shape){
            case "circle":
                if (radius ===0)return new myCircle().create(color)
                else return new myCircle().create(color ,radius, strokeWidth , fillColor )
            case "ellipse":
                if (rx ===0 || ry===0 )return new myEllipse().create(color)
                else return new myEllipse().create(color ,rx , ry, strokeWidth , fillColor ,angle)
            case "line":
                return new myLine().create(color, strokeWidth , x1+5, y1+5, x2+5, y2+5 , angle)
            case "rectangle":
                if (width ===0 || height ===0) return new Rectangle().create(color)
                else return new Rectangle().create(color, width , height, strokeWidth , fillColor , angle)
            case "square":
                if (width ===0 || height ===0) return new Square().create(color)
                else return new Square().create(color, width , strokeWidth , fillColor ,angle)
            case "triangle":
                if (width ===0 || height ===0) return new myTriangle().create(color)
                else return new myTriangle().create(color, width , height, strokeWidth , fillColor , angle)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory