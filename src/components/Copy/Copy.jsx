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
            if (active.type === "rect"){
              const clonedShape = protoFac.createShape({shape: "rectangle" , color : active.color ,height: active.height , width: active.width , radius: active.radius});
              console.log(active.type);
            // const myClonedShape = clonedShape.create(color);
              canvas.current.add(clonedShape)
              canvas.current.setActiveObject(clonedShape)
              canvas.current.renderAll()
            }
            else {
              const clonedShape = protoFac.createShape({shape: active.type , color : active.color ,height: active.height , width: active.width , radius: active.radius});  
              console.log(active.type);
            // const myClonedShape = clonedShape.create(color);
              canvas.current.add(clonedShape)
              canvas.current.setActiveObject(clonedShape)
              canvas.current.renderAll()
            }
        }
    }
    return(
      <div className="container">
        <button className="button" onClick={CopySelected}>Copy</button>
      </div>
    )
}
export default Copy 