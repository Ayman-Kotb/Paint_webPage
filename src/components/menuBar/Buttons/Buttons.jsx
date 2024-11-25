import "./Buttons.css"


function Buttons(){

    const addShape = (typeOfShape) => {

    }


  return(
      <div className="ContainerOfButtons">
        <button onClick={() => addShape ("circle")} className="circle"></button>
        <button onClick={() => addShape ("line")} className="Line"></button>
        <button onClick={() => addShape ("rectangle")} className="Rectangle"></button>
        <button onClick={() => addShape ("polygon")} className="Polygon"></button>
        <button onClick={() => addShape ("square")} className="Square"></button>
        <button onClick={() => addShape ("triangle")} className="Triangle"></button>
      </div>
  );
};
export default Buttons;