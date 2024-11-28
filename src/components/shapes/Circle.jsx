import { Circle } from "fabric";
import Shape from "./Shape";

class myCircle extends Shape {
    create(color , radius=50, strokeWidth=3){
        return new Circle({
            radius: radius,
            fill: "white",
            stroke: color,
            strokeWidth: strokeWidth,
            left: 50,
            top: 50,
            type: "circle",
        });
    }
}

export default myCircle;