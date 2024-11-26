import "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    create(){
        return new Line(
            this.options.points || [{ x: 50, y: 50 }, { x: 100, y: 100 }],
            {
                stroke: this.options.color || "red",
                strokeWidth: this.options.strokeWidth || 3,
            }
        )
    }
}

export default myLine