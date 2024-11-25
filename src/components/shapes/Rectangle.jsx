import "./Shape"
import { Rect } from "fabric"

class Rectangle extends Shape {
    create(){
        return new Rect({
            top: this.options.top || 100,
            left: this.options.left || 100,
            width: this.options.width || 100,
            height: this.options.height || 50,
            fill: this.options.fill || "red",
        })
    }
}

export default Rectangle