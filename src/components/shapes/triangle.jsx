import { Triangle } from "fabric"
import Shape from "./Shape"

class myTriangle extends Shape {
    create(color){
        return new Triangle({
            top: 100,
            left: 100,
            width: 150,
            height: 150,
            fill: `${color}`,
        })
    }
}

export default myTriangle