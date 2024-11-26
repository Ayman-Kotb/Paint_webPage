import shapeFactory from "../shapeFactory/ShapeFactory";
import "./Buttons.css"

import { RiRectangleFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { FaSquare } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";

function Buttons(){

    const addShape = (typeOfShape) => {
      const factory = new shapeFactory();
      const shape = factory.createShape(typeOfShape);
      canvas.add(shape.create());           /// we need to insert the canvas "don't know how"
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