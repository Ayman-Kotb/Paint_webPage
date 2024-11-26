import { Circle } from "fabric";
import Shape from "./Shape";

class myCircle extends Shape {
    create() {
        return new Circle({
            radius: 50,
            fill: "blue",
            left: 50,
            top: 50,
        });
    }
}

export default myCircle;