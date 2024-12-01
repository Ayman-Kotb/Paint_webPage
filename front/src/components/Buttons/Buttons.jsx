import { useEffect, useRef, useState } from "react";
import shapeFactory from "../shapeFactory/ShapeFactory";
import { handleSave } from "../SaveStateToBack/SaveStateToBack";
import ShapeButtons from "./ShapeButtons";
import ShapeProperties from "./ShapeToolBox";

function Buttons({ canvas, color, selectedShape, setSelectedShape, properties, setProperties }) {
  const factory = useRef(null);
  const lineRef = useRef(null);
  // Initialize Shape Factory
  const [isLine, setIsLine] = useState(false);
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
    setSelectedShape(shape);
    handleSelection({ canvas, setSelectedShape , setProperties}); // Simulate selection after adding
    handleSave({canvas});
    canvas.current.renderAll();
  };
  
  return (
    <div className="container">
      <ShapeButtons canvas={canvas} addShape={addShape} color={color} setIsLine={setIsLine} lineRef={lineRef}/>

      {/* Toolbox for Selected Shape Properties */}
      {(selectedShape && selectedShape.type !== "activeselection") && <ShapeProperties properties={properties} 
                                         setProperties={setProperties}
                                         selectedShape={selectedShape}
                                         canvas={canvas}/>}
    </div>
  );
}

export const handleSelection = ({ canvas, setSelectedShape , setProperties}) => {
  const activeObject = canvas.current.getActiveObject();
  if (!activeObject) return;
  setSelectedShape(activeObject);
  setProperties({
    width: activeObject.width * activeObject.scaleX || 0,
    height: activeObject.height * activeObject.scaleY || 0,
    rx: activeObject.rx * activeObject.scaleX || 0,
    ry: activeObject.ry * activeObject.scaleY || 0,
    side :activeObject.width * activeObject.scaleX || 0,
    radius: activeObject.radius || 0,
    strokeWidth: activeObject.strokeWidth*activeObject.scaleX || 3,
    fill: activeObject.fill || "#FFFFFF",
  });
  handleSave({canvas});
  canvas.current.renderAll();
};

export default Buttons;
