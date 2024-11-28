
import shapeFactory from "../shapeFactory/ShapeFactory";

function Copy({canvas}){
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

        const clonedShape = protoFac.createShape({
                            shape: active.type === "rect"? "rectangle": active.type,
                            color : active.get("stroke"), height: active.get("height")*active.get("scaleY"),
                            width: active.get("width")*active.get("scaleX"),
                            radius: active.get("radius"),
                            strokeWidth: active.get("strokeWidth"),
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