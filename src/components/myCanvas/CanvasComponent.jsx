import { useEffect } from "react";
import { Canvas } from "fabric";
import "./CanvasComponent.css";
import CanvasAdjust from "./CanvasAdjust.jsx";
import SaveStateToBack from "../SaveStateToBack/SaveStateToBack.jsx";
import { handleSave } from "../SaveStateToBack/SaveStateToBack.jsx";

function CanvasComponent({ canvas}) {
  useEffect(() => {
    const startCanvas = new Canvas("canvas", {
      height: 450,
      width: 900,
    });
    canvas.current = startCanvas;
    handleSave({canvas});
    canvas.current.on("path:created", (event) => {
      const path = event.path;
      path.set({
        selectable: true,
        evented: true,
        hasControls: true,
        hasBorders: true,
        lockScalingX: false,
        lockScalingY: false,
        lockRotation: false,
      });
      if (!path.findControl) {
        path.findControl = () => null;
      }
      if (!path.onDragStart) {
        path.onDragStart = () => {};
      }
      if (!path.shouldStartDragging) {
        path.shouldStartDragging = () => false;
      }
      canvas.current.renderAll();
    });
    return () => {
      startCanvas.dispose();
    };
  }, []);
  
  return (
    <div className="canvasContainer">
      <canvas id="canvas" />
      <CanvasAdjust canvas={canvas} />
      <SaveStateToBack/>
    </div>
  );
}
export default CanvasComponent;
