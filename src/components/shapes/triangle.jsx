import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    type= "triangle";
    create(color , width=100 , height=100){
        return new Triangle({
            top: 100,
            left: 100,
            width: width,
            height: height,
            fill: `${color}`,
        })
    }
}

export default myTriangle