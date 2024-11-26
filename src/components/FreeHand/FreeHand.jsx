import "./FreeHand.css"
import { BsBrushFill } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
function FreeHand(){
  return(
    <div className="FreeHandContainer">
      <button className="FreeHand"><BsBrushFill></BsBrushFill></button>
      <button className="FreeHand"><IoPencil></IoPencil></button>
    </div>
  )
}
export default FreeHand