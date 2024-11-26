import shapeFactory from "../shapeFactory/ShapeFactory";

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
      <div className="container">

        <button onClick={() => addShape ("circle")}  className="button">⚫</button>
        <button onClick={() => addShape ("line")} className="button">📏</button>
        <button onClick={() => addShape ("rectangle")} className="button">🟦</button>
        <button onClick={() => addShape ("triangle")} className="button">🔺</button>
        
      </div>
  );
};
export default Buttons;