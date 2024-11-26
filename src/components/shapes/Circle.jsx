import { Circle } from "fabric";
import Shape from "./Shape";

class myCircle extends Shape {
    create() {
        return new Circle({
            radius: this.options.radius || 50,
            fill: this.options.color || "blue",
            left: this.options.left || 50,
            top: this.options.top || 50,
        });
    }
}

export default myCircle;