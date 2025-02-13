import Shape from "./Shape"
import { Rect } from "fabric"

class Square extends Shape {
    create(color, size = 100, strokeWidth = 3 , fillColor= "#FFFFFF" , angle=0 ) {
        return new Rect({
            angle: angle ,
            top: 100,
            left: 100,
            fill: fillColor,
            stroke: color,
            strokeWidth: strokeWidth,
            width: size, 
            height: size, 
            scaleX: 1, 
            scaleY: 1,
            lockScalingX :true,
            lockScalingY :true,
            originX: "left", 
            originY: "top",
            type: "square",
        })
    }
}

export default Square