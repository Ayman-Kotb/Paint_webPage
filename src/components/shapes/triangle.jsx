import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    type= "triangle";
    create(color){
        return new Triangle({
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            fill: `${color}`,
        })
    }
}

export default myTriangle