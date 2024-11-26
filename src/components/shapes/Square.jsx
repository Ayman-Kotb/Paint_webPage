import { Rect } from "fabric"
import Shape from "./Shape"

class Square extends Shape {
    create(){
        return new Rect({
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            fill: "red",
        })
    }
}

export default Square