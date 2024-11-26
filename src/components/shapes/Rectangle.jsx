import Shape from "./Shape"
import { Rect } from "fabric"

class Rectangle extends Shape {
    type="rectangle"
    create(color){
        return new Rect({
            top: 100,
            left: 100,
            width: 200,
            height: 100,
            fill: `${color}`,
        })
    }
}

export default Rectangle