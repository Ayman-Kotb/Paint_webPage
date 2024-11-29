
import shapeFactory from "../shapeFactory/ShapeFactory";

function Copy({canvas}){
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
          const clonedShape = protoFac.createShape({
            shape: active.type === "rect"? "rectangle": active.type,
            color : active.get("stroke"),
            height: active.get("height")*active.get("scaleY"),
            width: active.get("width")*active.get("scaleX"),
            radius: active.get("radius")*active.get("scaleX"),
            rx : active.get("rx")*active.get("scaleX"),
            ry : active.get("ry")*active.get("scaleY"),
            strokeWidth: active.get("strokeWidth")*active.get("scaleY"),
            fillColor: active.get("fill")
          });

canvas.current.add(clonedShape)
canvas.current.setActiveObject(clonedShape)
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