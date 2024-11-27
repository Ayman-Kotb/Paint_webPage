import { useState } from "react";
class Shape {
    type = "shape";
    top = 50 ;
    left = 50;
    width = 100;
    height = 100;
    radius = 50;
    color = "black";
    // constructor(top, left, radius , color) {
    //     this.top = top;
    //     this.left = left;
    //     this.radius = radius;
    //     this.color = color;
    // }
    // constructor(top, left, width, height, color) {
    //     this.top = top;
    //     this.left = left;
    //     this.width = width;
    //     this.height = height;
    //     this.radius = radius;
    //     this.color = color;
    // }
    // constructor(){}
    create(color){

        throw new Error("Method not implemented")
    }
}

export default Shape