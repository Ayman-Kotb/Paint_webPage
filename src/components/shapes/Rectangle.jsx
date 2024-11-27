import Shape from "./Shape"
import { Rect } from "fabric"

class Rectangle extends Shape {
    type = "rectangle"
    // constructor({top, left, width, height}){
    //     super(top={top}, left={left}, width={width}, height={height});
    // }
    create(color, width = 200, height = 100) {
        console.log(width + " " + height)
        const strokeWidth = 0
        return new Rect({
            top: 100,
            left: 100,
            fill: `${color}`,
            width: width - strokeWidth, // Adjust width to remove stroke inflation
            height: height - strokeWidth, // Adjust height to remove stroke inflation
            strokeWidth: strokeWidth,
            stroke: null, // No border stroke unless explicitly required
            scaleX: 1, // Disable scaling to avoid distortion
            scaleY: 1,
            originX: "left", // Align origin to top-left
            originY: "top",
            type: "rectangle",
        })
    }
}

export default Rectangle