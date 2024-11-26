import shapeFactory from "../shapeFactory/ShapeFactory";
import "./Buttons.css"

import { RiRectangleFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { FaSquare } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";

function Buttons({canvas , color}){
      console.log(color);
    const addShape = (typeOfShape) => {
      if(!canvas.current) return;
      const factory = new shapeFactory();
      //console.log(`the canvas is`);
      //console.log(canvas.current);
      const shape = factory.createShape(typeOfShape);
      const myShape = shape.create(color);
      //console.log(`the shape is ${typeOfShape}`);
      //console.log(myShape);
  
      canvas.current.add(myShape);         
    }


  return(
      <div className="ContainerOfButtons">

      
        <button onClick={() => addShape ("circle")}  className="button"><FaCircle/></button>
        <button onClick={() => addShape ("line")} className="button"><GoHorizontalRule/></button>
        <button onClick={() => addShape ("rectangle")} className="button"><RiRectangleFill/></button>
        <button onClick={() => addShape ("square")} className="button"><FaSquare/></button>
        <button onClick={() => addShape ("triangle")} className="button"><IoTriangle/></button>
        
        
      </div>
  );
};
export default Buttons;