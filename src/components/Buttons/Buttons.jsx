import "./Buttons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RiRectangleFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { FaSquare } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

function Buttons(){

    const addShape = (typeOfShape) => {

    }


  return(
      <div className="ContainerOfButtons">

      
        <button onClick={() => addShape ("circle")}  className="button"><FaCircle></FaCircle></button>
        <button onClick={() => addShape ("line")} className="button"><GoHorizontalRule ></GoHorizontalRule></button>
        <button onClick={() => addShape ("rectangle")} className="button"><RiRectangleFill></RiRectangleFill></button>
        <button onClick={() => addShape ("square")} className="button"><FaSquare></FaSquare></button>
        <button onClick={() => addShape ("triangle")} className="button"><IoTriangle></IoTriangle></button>
        
      </div>
  );
};
export default Buttons;