import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";

class ShapeFactory {
    createShape( {shape , color , radius , width , height}){
        switch (shape){
            case "circle":
                if (radius ===0)return new myCircle().create(color)
                else return new myCircle().create(color ,radius)
            case "line":
                return new myLine().create(color)
            case "rectangle":
                console.log(width + " " + height)
                if (width ===0 || height ===0) return new Rectangle().create(color)
                else return new Rectangle().create(color, width , height)
            case "triangle":
                if (width ===0 || height ===0) return new myTriangle().create(color)
                else return new myTriangle().create(color, width , height)
            default:
                throw new Error(`${shape} is not valid`)
        }
    }
}
export default ShapeFactory