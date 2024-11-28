import Shape from "../shapes/Shape"
import shapeFactory from "../shapeFactory/ShapeFactory";
import myCircle from "../shapes/Circle.jsx";
import myLine from "../shapes/Line.jsx";
import Rectangle from "../shapes/Rectangle.jsx";
import myTriangle from "../shapes/triangle.jsx";
function Copy({canvas , color}){
    const protoFac = new shapeFactory();
    const CopySelected = () => {
        const active = canvas.current.getActiveObject();
       
        if(active){

          if (active instanceof fabric.Path) {
            active.clone((clonedPath) => {
                canvas.current.add(clonedPath);
            });
            return;
        }
        console.log(active);
        console.log(active.get("type"));
            if (active.type === "rect"){
              const clonedShape = protoFac.createShape({shape: "rectangle" , color : active.get("stroke") ,height: active.get("height")*active.get("scaleY")  , width: active.get("width")*active.get("scaleX") , radius: active.get("radius") , strokeWidth: active.get("strokeWidth") , fillColor: active.get("fill")});
              console.log(active.get("width") +"   "+ active.get("height")+" from copy");
            // const myClonedShape = clonedShape.create(color);
              canvas.current.add(clonedShape)
              canvas.current.setActiveObject(clonedShape)
              canvas.current.renderAll()
              console.log(clonedShape); 
            }
            else {
              const clonedShape = protoFac.createShape({shape: active.type , color : active.get("stroke") ,height: active.get("height")*active.get("scaleY")  , width: active.get("width")*active.get("scaleX")  , radius: active.get("radius")*active.get("scaleX") , strokeWidth: active.get("strokeWidth") , fillColor: active.get("fill")});  
              console.log(active.type);
            // const myClonedShape = clonedShape.create(color);
              canvas.current.add(clonedShape)
              canvas.current.setActiveObject(clonedShape)
              canvas.current.renderAll()
              console.log(clonedShape); 
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