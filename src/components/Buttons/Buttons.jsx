import { useEffect, useRef, useState } from "react";
import shapeFactory from "../shapeFactory/ShapeFactory";
import { makeLine } from "./Line";
import { handleSave } from "../SaveStateToBack/SaveStateToBack";
import ShapeButtons from "./ShapeButtons";
import ShapeProperties from "./ShapeToolBox";

function Buttons({ canvas, color }) {
  const factory = useRef(null);
  const lineRef = useRef(null);
  // Initialize Shape Factory
  const [isLine, setIsLine] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null); // Track the selected shape
  const [properties, setProperties] = useState({
    width: 0,
    height: 0,
    radius: 0,
    side:0 ,
    rx:0 ,
    ry:0 ,
    strokeWidth: 3,
    fill: "#FFFFFF",
  });
  useEffect(() => {
    const myFactory = new shapeFactory();
    factory.current = myFactory;
  }, []);

  // Add Shape to Canvas
  const addShape = ({ typeOfShape, radius = 0, width = 0,strokeWidth = 3, height = 0 , x1=100 , y1=100 , x2 =200, y2=200}) => {
    if (!canvas.current) return;
    setIsLine(false);
    const shape = factory.current.createShape({
      shape: typeOfShape,
      color: color,
      radius: radius,
      width: width,
      strokeWidth: strokeWidth,
      height: height,
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
    });
    if (shape.get("width")===shape.get("height")) shape.set("type", "square")
    canvas.current.add(shape);
    canvas.current.setActiveObject(shape);
    handleSelection({ target: shape }); // Simulate selection after adding
    handleSave({canvas});
    canvas.current.renderAll();
  };
  
  // Handle Shape Selection
  useEffect(() => {
    if (!canvas.current) return;
    const handleSelectionCleared = () => {
      setSelectedShape(null);
      setProperties({
        width: 0,
        height: 0,
        radius: 0,
        side :0 ,
        rx :0,
        ry :0,
        strokeWidth: 3,
        fill: "#FFFFFF",
      });
    };
    canvas.current.on("selection:created", handleSelection);
    canvas.current.on("selection:updated", handleSelection);
    canvas.current.on("object:modified", handleSelection);
    canvas.current.on("selection:cleared", handleSelectionCleared);
    return () => {
      canvas.current.off("selection:created", handleSelection);
      canvas.current.off("selection:updated", handleSelection);
      canvas.current.off("object:modified", handleSelection);
      canvas.current.off("selection:cleared", handleSelectionCleared);
    }
  }, [canvas.current]);


  const handleSelection = () => {
    const activeObject = canvas.current.getActiveObject();
    if (!activeObject) return;
    // console.log(activeObject.type)
    // console.log(activeObject.get("width"))
    // console.log(activeObject.get("height"))
    setSelectedShape(activeObject);
    setProperties({
      width: activeObject.width * activeObject.scaleX || 0,
      height: activeObject.height * activeObject.scaleY || 0,
      rx: activeObject.rx * activeObject.scaleX || 0,
      ry: activeObject.ry * activeObject.scaleY || 0,
      side :activeObject.width * activeObject.scaleX || 0,
      radius: activeObject.radius || 0,
      strokeWidth: activeObject.strokeWidth || 3,
      fill: activeObject.fill || "#FFFFFF",
    });
    handleSave({canvas});
    canvas.current.renderAll();
  };

  
  return (
    <div className="container">
      <ShapeButtons canvas={canvas} addShape={addShape} color={color} setIsLine={setIsLine} lineRef={lineRef}/>

      {/* Toolbox for Selected Shape Properties */}
      {selectedShape && <ShapeProperties properties={properties} 
                                         setProperties={setProperties}
                                         selectedShape={selectedShape}
                                         canvas={canvas}/>}
    </div>
  );
}
export default Buttons;
