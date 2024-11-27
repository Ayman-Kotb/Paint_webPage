import { useEffect, useRef } from "react";
import shapeFactory from "../shapeFactory/ShapeFactory";

function Buttons({canvas , color}){
    const factory = useRef(null);
    useEffect(()=>{
      const myFactory = new shapeFactory();
      factory.current = myFactory
    },[])
    const addShape = (typeOfShape) => {
      if(!canvas.current) return;
      const shape = factory.current.createShape(typeOfShape);
      const myShape = shape.create(color);
      canvas.current.add(myShape);         
    }


  return(
      <div className="container">

        <button onClick={() => addShape ("circle")}  className="button">⚫</button>
        <button onClick={() => addShape ("line")} className="button">📏</button>
        <button onClick={() => addShape ("rectangle")} className="button">🟦</button>
        <button onClick={() => addShape ("triangle")} className="button">🔺</button>
        
      </div>
  );
};
export default Buttons;