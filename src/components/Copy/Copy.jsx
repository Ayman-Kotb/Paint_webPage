import { handleSave } from "../SaveStateToBack/SaveStateToBack";
import shapeFactory from "../shapeFactory/ShapeFactory";

function Copy({ canvas }) {
  const protoFac = new shapeFactory();

  const copyPath = (active) => {
    try {
      // Get all the path's data
      const pathData = active.toObject();

      // Create a new path from the original data
      fabric.Path.fromObject(pathData, (clonedPath) => {
        // Set new position
        clonedPath.set({
          left: active.left + 20,
          top: active.top + 20,
          selectable: true,
          evented: true,
          hasControls: true,
          hasBorders: true,
          lockScalingX: false,
          lockScalingY: false,
          lockRotation: false,
          strokeUniform: true,
        });

        // Add required methods for path objects
        if (!clonedPath.findControl) {
          clonedPath.findControl = () => null;
        }
        if (!clonedPath.shouldStartDragging) {
          clonedPath.shouldStartDragging = () => false;
        }
        if (!clonedPath.onDragStart) {
          clonedPath.onDragStart = () => {};
        }
        if (!clonedPath.getActiveControl) {
          clonedPath.getActiveControl = () => null;
        }
        return clonedPath;
      });
    } catch (error) {
      console.error("Error copying path:", error);
    }
  };

  const copyShape = (active) => {
    const clonedShape = protoFac.createShape({
      shape: active.type === "rect" ? "rectangle" : active.type,
      color: active.get("stroke"),
      height: active.get("height") * active.get("scaleY"),
      width: active.get("width") * active.get("scaleX"),
      radius: active.get("radius") * active.get("scaleX"),
      rx: active.get("rx") * active.get("scaleX"),
      ry: active.get("ry") * active.get("scaleY"),
      strokeWidth: active.get("strokeWidth"),
      fillColor: active.get("fill"),
    });

    // Position the clone with an offset
    clonedShape.set({
      left: active.left + 20,
      top: active.top + 20,
    });
    return clonedShape;
  };

  const copyGroup = async (active) => {
    try {
      const clonedObjects = [];
      const activeObjects = active.getObjects();

      const leftShift = active.left + 100;
      const topShift = active.top + 100;

      for (const obj of activeObjects) {

        if (obj.type === "path") {
          // Get the path's data
          clonedObjects.push(copyPath(obj));
        } else {
          clonedObjects.push(copyShape(obj));
        }
      }
      clonedObjects.forEach((obj) =>{
        obj.set({
          left: obj.left + leftShift,
          top: obj.top + topShift,
        })
        canvas.current.add(obj);
      })
      const canvasJson = canvas.current.toJSON();
      canvas.current.loadFromJSON(canvasJson);
      clearTimeout();
      setTimeout(() => {
        canvas.current.renderAll();
      });
    } catch (error) {
      console.error("Error copying group:", error);
    }
  };

  const CopySelected = () => {
    const active = canvas.current.getActiveObject();

    if (active) {
      if (active.type === "activeselection") {

        copyGroup(active);
        
      } else if (active.type === "path") {

        const clonedPath = copyPath(active);

        canvas.current.add(clonedPath);

        const canvasJson = canvas.current.toJSON();
        canvas.current.loadFromJSON(canvasJson);

        clearTimeout();
        setTimeout(() => {
          canvas.current.renderAll();
        }, 0);

      } else {
        copyShape(active);

        canvas.current.add(clonedShape);

        canvas.current.setActiveObject(clonedShape);
        canvas.current.renderAll();
      }
      handleSave({ canvas });
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={CopySelected}>
        Copy
      </button>
    </div>
  );
}

export default Copy;
