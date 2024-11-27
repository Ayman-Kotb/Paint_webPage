import Shape from "./Shape"
import { Rect } from "fabric"

class Rectangle extends Shape {
    type="rectangle"
    // constructor({top, left, width, height}){
    //     super(top={top}, left={left}, width={width}, height={height});
    // }
    create(color , width=200, height=100){
        return new Rect({
            top: 100,
            left: 100,
            width: width,
            height: height,
            fill: `${color}`,
        })
    }
}

export default Rectangle