import { makeLine } from "../LineDrawing/LineDrawing";
import { TbLine } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FiTriangle } from "react-icons/fi";
import { FaRegSquare } from "react-icons/fa6";

function ShapeButtons({ canvas, addShape, color, setIsLine, lineRef }) {
  return (
    <>
      <button onClick={() => addShape({ typeOfShape: "circle" })} title="Circle" className="button"><FaRegCircle /></button>
      <button onClick={() => addShape({ typeOfShape: "ellipse" })} title="Ellipse" className="button">⬭</button>
      <button onClick={() => makeLine(canvas.current, color, setIsLine, lineRef)} title="Line" className="button"><TbLine /></button>
      <button onClick={() => addShape({ typeOfShape: "rectangle" })} title="Rectangle" className="button"><LuRectangleHorizontal /></button>
      <button onClick={() => addShape({ typeOfShape: "square" })} title="Square" className="button"><FaRegSquare /></button>
      <button onClick={() => addShape({ typeOfShape: "triangle" })} title="Triangle" className="button"><FiTriangle /></button>
    </>
  );
}

export default ShapeButtons;
