import Shape from "./Shape"
import { Line } from "fabric"
class myLine extends Shape {
    type= "line";
    create(color){
        return new Line(
            [50 ,50 ,200 ,200],
            {
                stroke:`${color}`,
                strokeWidth: 3,
            }
        )
    }
}

export default myLine