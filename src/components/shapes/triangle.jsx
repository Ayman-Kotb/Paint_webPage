import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    create(color , width=100 , height=100, strokeWidth=3 , fillColor="white"){
        return new Triangle({
            top: 100,
            left: 100,
            width: width,
            height: height,
            fill: fillColor,
            stroke: color, 
            strokeWidth: strokeWidth,
            originX: "left",
            originY: "top",
            scaleX: 1,
            scaleY: 1,
            type: "triangle",
        })
    }
}

export default myTriangle