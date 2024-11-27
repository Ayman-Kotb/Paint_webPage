import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    type= "triangle";
    create(color , width=100 , height=100){
        const strokeWidth = 0
        return new Triangle({
            top: 100,
            left: 100,
            width: width-strokeWidth,
            height: height-strokeWidth,
            fill: `${color}`,
            stroke: null, 
            originX: "left",
            originY: "top",
            scaleX: 1,
            scaleY: 1,
        })
    }
}

export default myTriangle