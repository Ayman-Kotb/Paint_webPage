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

        canvas.current.add(clonedPath);
        const canvasJson = canvas.current.toJSON();
        canvas.current.loadFromJSON(canvasJson);
        clearTimeout();
        setTimeout(() => {
          canvas.current.renderAll();
        }, 0);
        handleSave({ canvas });
        canvas.current.renderAll();
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

    canvas.current.add(clonedShape);
    canvas.current.setActiveObject(clonedShape);
    handleSave({ canvas });
    canvas.current.renderAll();
  };

  const copyGroup = async (active) => {
    try {
      const clonedObjects = [];
      const activeObjects = active.getObjects();

      const groupLeft = active.left || 0;
      const groupTop = active.top || 0;

      for (const obj of activeObjects) {
        const relativeLeft = obj.left - groupLeft;
        const relativeTop = obj.top - groupTop;

        if (obj.type === "path") {
          // Get the path's data
          const pathData = obj.toObject();

          await new Promise((resolve) => {
            fabric.Path.fromObject(pathData, (clonedPath) => {
              clonedPath.set({
                left: relativeLeft + groupLeft + 200,
                top: relativeTop + groupTop + 200,
                selectable: true,
                evented: true,
                hasControls: true,
                hasBorders: true,
                lockScalingX: false,
                lockScalingY: false,
                lockRotation: false,
                strokeUniform: true,
              });

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

              clonedObjects.push(clonedPath);
              resolve();
            });
          });
        } else {
          const clonedShape = protoFac.createShape({
            shape: obj.type === "rect" ? "rectangle" : obj.type,
            color: obj.get("stroke"),
            height: obj.get("height") * obj.get("scaleY"),
            width: obj.get("width") * obj.get("scaleX"),
            radius: obj.get("radius") * obj.get("scaleX"),
            rx: obj.get("rx") * obj.get("scaleX"),
            ry: obj.get("ry") * obj.get("scaleY"),
            strokeWidth: obj.get("strokeWidth"),
            fillColor: obj.get("fill"),
          });

          // Position the clone with an offset
          clonedShape.set({
            left: groupLeft + relativeLeft + 200,
            top: groupTop + relativeTop + 200,
          });

          clonedObjects.push(clonedShape);
        }
      }

      clonedObjects.forEach((obj) => {
        canvas.current.add(obj);
      });
      const canvasJson = canvas.current.toJSON();
      canvas.current.loadFromJSON(canvasJson);
      clearTimeout();
      setTimeout(() => {
        canvas.current.renderAll();
      }, 0);
      handleSave({ canvas });
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
        copyPath(active);
      } else {
        copyShape(active);
      }
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
