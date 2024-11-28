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
            const jsonRepresentation = active.toObject(['shouldStartDragging', 'getActiveControl', 'onDragStart', 'canDrop']); // Include custom properties

            fabric.util.enlivenObjects([jsonRepresentation], ([clonedObject]) => {

              clonedObject.shouldStartDragging = active.shouldStartDragging || (() => false);
              clonedObject.getActiveControl = active.getActiveControl || (() => null);
              clonedObject.onDragStart = active.onDragStart || (() => {});
              clonedObject.canDrop = active.canDrop || (() => false);

              Object.assign(clonedObject, {
                ...active, 
                left: active.left + 10, 
                top: active.top + 10,
              });
          
              
              canvas.current.add(clonedObject);
        
              canvas.current.setActiveObject(clonedObject);
          
          
              console.log(canvas.current.getObjects());
            });
            return ;
          }
        

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