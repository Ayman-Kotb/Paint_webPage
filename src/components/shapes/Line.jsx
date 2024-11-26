import Shape from "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    create(color){
        return new Line(
            [{ x: 50, y: 50 }, { x: 100, y: 100 }],
            {
                stroke:`${color}`,
                strokeWidth: 3,
            }
        )
    }
}

export default myLine