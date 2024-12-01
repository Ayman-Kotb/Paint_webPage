import { useState } from "react";
class Shape {
    type = "shape";
    top = 50 ;
    left = 50;
    width = 100;
    height = 100;
    radius = 50;
    color = "black";
    strokeWidth = 3;
    create(color){

        throw new Error("Method not implemented")
    }
}

export default Shape