import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape( {shape , color , radius , width ,strokeWidth , height}){
        switch (shape){
            case "circle":
                if (radius ===0)return new myCircle().create(color)
                else return new myCircle().create(color ,radius, strokeWidth)
            case "line":
                return new myLine().create(color, strokeWidth)
            case "rectangle":
                if (width ===0 || height ===0) return new Rectangle().create(color)
                else return new Rectangle().create(color, width , height, strokeWidth)
            case "triangle":
                if (width ===0 || height ===0) return new myTriangle().create(color)
                else return new myTriangle().create(color, width , height, strokeWidth)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory