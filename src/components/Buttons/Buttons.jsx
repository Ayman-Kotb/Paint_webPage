import { useEffect, useRef, useState } from "react";
import shapeFactory from "../shapeFactory/ShapeFactory";
import Shape from "../shapes/Shape";

function Buttons({ canvas, color }) {
  const factory = useRef(null);
  useEffect(() => {
    const myFactory = new shapeFactory();
    factory.current = myFactory
  }, [])
  const addShape = ({ typeOfShape, radius = 0, width = 0, height = 0 }) => {
    console.log(width + " " + height)
    if (!canvas.current) return;
    const shape = factory.current.createShape({ shape: typeOfShape, color: color, radius: radius, width: width, height: height });
    // const myShape = shape.create(color);
    canvas.current.add(shape);
  }
  const [showInput, setShowInput] = useState(false); 
  const [showInputRec, setShowInputRec] = useState(false); 
  const [showInputTri, setShowInputTri] = useState(false); 
  const [radius, setRadius] = useState(""); 
  const [width, setWidth] = useState(""); 
  const [height, setHeight] = useState(""); 
  const handleButtonClickRec = () => {
    setShowInputRec(!showInputRec);
    setShowInput(false);
    setShowInputTri(false);

  };
  const handleButtonClickTri = () => {
    setShowInputTri(!showInputTri);
    setShowInputRec(false);
    setShowInput(false);

  };
  const handleButtonClick = () => {
    setShowInput(!showInput);
    setShowInputRec(false);
    setShowInputTri(false);

  };
  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleSubmit = (type) => {
    if (type == "rec") {
      console.log(width + " " + height)
      if (width === ""|| height === ""){
        addShape({ typeOfShape: "rectangle"})
      }
      else addShape({ typeOfShape: "rectangle", width: width, height: height })
      setShowInputRec(false);
    }
    else {
      console.log(width + " " + height)
      if (width == ""|| height == ""){
        addShape({ typeOfShape: "triangle"})
      }
      else addShape({ typeOfShape: "triangle", width: width, height: height })
      setShowInputTri(false);
    }
  };
  const handleCircleSubmit = () => {
    
    if (radius === ""){
      addShape({ typeOfShape: "circle"})
    }
    else {
      addShape({ typeOfShape: "circle", radius: radius })
    }
    setShowInput(false);
  };
  return (
    <div className="container">
      <button onClick={() => handleButtonClick()} className="button">⚫</button>
      {showInput && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <label>
            Enter Radius:
            <input
              type="number"
              value={radius}
              onChange={handleRadiusChange}
              placeholder="Enter radius"
            />
          </label>
          <button onClick={handleCircleSubmit}>Submit</button>
        </div>
      )}
      <button onClick={() => addShape({typeOfShape: "line"})} className="button">📏</button>
      <button onClick={() => handleButtonClickRec()} className="button">🟦</button>
      {showInputRec && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <label>
            Enter Width:
            <input
              type="number"
              value={width}
              onChange={handleWidthChange}
              placeholder="Enter width"
            />
          </label>
          <label>
            Enter Height:
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Enter Height"
            />
          </label>
          <button onClick={() => handleSubmit("rec")}>Submit</button>
        </div>
      )}
      <button onClick={() => handleButtonClickTri()} className="button">🔺</button>
      {showInputTri && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <label>
            Enter Width:
            <input
              type="number"
              value={width}
              onChange={handleWidthChange}
              placeholder="Enter width"
            />
          </label>
          <label>
            Enter Height:
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Enter Height"
            />
          </label>
          <button onClick={() => handleSubmit("triangle")}>Submit</button>
        </div>
      )}

    </div>
  );
};
export default Buttons;