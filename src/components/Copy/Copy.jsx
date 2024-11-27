import Shape from "../shapes/Shape"
import shapeFactory from "../shapeFactory/ShapeFactory";
import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";
function Copy({canvas , color}){
    const protoFac = new shapeFactory();
    const CopySelected = () => {
        const active = canvas.current.getActiveObject()
        if(active){
            const clonedShape = protoFac.createShape(active.type === "rect"? "rectangle" : active.type);
            console.log(active.type);
            const myClonedShape = clonedShape.create(color);
            canvas.current.add(myClonedShape)
            canvas.current.setActiveObject(myClonedShape)
            canvas.current.renderAll()
        }
    }
    return(
      <div className="container">
        <button className="button" onClick={CopySelected}>Copy</button>
      </div>
    )
}
export default Copy 