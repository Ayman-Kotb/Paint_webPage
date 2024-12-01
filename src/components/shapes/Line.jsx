import Shape from "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    create(color, strokeWidth=3 , x1=100, y1=100, x2=200, y2=200){
        return new Line(
            [x1 ,y1 ,x2,y2],
            {
                stroke:color,
                strokeWidth: strokeWidth,
                type: "line",
            }
        )
    }
}

export default myLine