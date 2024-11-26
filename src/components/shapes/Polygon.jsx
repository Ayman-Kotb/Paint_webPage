import { Polygon } from "fabric"
import "./Shape"

class myPolygon extends Shape {
    create(){
        return new Polygon(
            this.options.points || 
            [
                { x: 200, y: 0 },
                { x: 250, y: 100 },
                { x: 150, y: 100 },
            ],
            {
                top: this.options.top || 100,
                left: this.options.left || 100,
                fill: this.options.fill || "red",
            }
        )
    }
}

export default myPolygon