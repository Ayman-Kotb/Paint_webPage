import { Circle } from "fabric";
import React from "react";
import Shape from "./Shape";

class myCircle extends Shape {
    // type = "circle";
    // [top , setTop] = useState(50) ;
    // [left, setLeft] = useState(50);
    // [radius, setRadius] = useState(50);
    // constructor ({top, left, radius}){
    //     super(top={top}, left={left}, radius={radius});
    // } 
    create(color , radius=50) {
        return new Circle({
            radius: radius,
            fill: `${color}`,
            left: 50,
            top: 50,
        });
    }
}

export default myCircle;