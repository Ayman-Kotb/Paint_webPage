import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    create(color , width=100 , height=200, strokeWidth=3 , fillColor="#FFFFFF" , angle=0){
        return new Triangle({
            angle: angle,  // Adjust angle to remove stroke inflation
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