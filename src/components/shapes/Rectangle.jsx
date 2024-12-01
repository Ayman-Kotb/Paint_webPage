import Shape from "./Shape"
import { Rect } from "fabric"

class Rectangle extends Shape {
    create(color, width = 200, height = 100, strokeWidth = 3 , fillColor= "white", angle=0) {
        return new Rect({
            angle: angle, // Adjust angle to remove stroke inflation
            top: 100,
            left: 100,
            fill: fillColor,
            stroke: color,
            strokeWidth: strokeWidth,
            width: width, // Adjust width to remove stroke inflation
            height: height, // Adjust height to remove stroke inflation
            scaleX: 1, // Disable scaling to avoid distortion
            scaleY: 1,
            originX: "left", // Align origin to top-left
            originY: "top",
            type: "rectangle",
        })
    }
}

export default Rectangle