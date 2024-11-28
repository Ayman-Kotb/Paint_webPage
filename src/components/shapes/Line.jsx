import Shape from "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    create(color, strokeWidth=3){
        return new Line(
            [50 ,50 ,200 ,200],
            {
                stroke:color,
                strokeWidth: strokeWidth,
                type: "line",
            }
        )
    }
}

export default myLine