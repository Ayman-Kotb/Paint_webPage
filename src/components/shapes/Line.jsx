import Shape from "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    create(){
        return new Line(
            [{ x: 50, y: 50 }, { x: 100, y: 100 }],
            {
                stroke: "red",
                strokeWidth: 3,
            }
        )
    }
}

export default myLine