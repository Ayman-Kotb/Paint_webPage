import { useEffect } from "react";
import { Canvas } from "fabric";
import "./CanvasComponent.css";
import CanvasAdjust from "./CanvasAdjust.jsx";
import SaveStateToBack from "../SaveStateToBack/SaveStateToBack.jsx";
import { handleSave } from "../SaveStateToBack/SaveStateToBack.jsx";
import { handleSelection } from "../Buttons/Buttons.jsx";

function CanvasComponent({ canvas, setSelectedShape, setProperties }) {
  useEffect(() => {
    // Create new canvas instance
    const startCanvas = new Canvas("canvas", {
      height: 450,
      width: 900,
      stopContextMenu: true, // Prevents right-click menu
    });
    canvas.current = startCanvas;

    // Add path creation handler
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
        strokeUniform: true,
      });

      // Add required methods for fabric.js path handling
      if (!path.findControl) {
        path.findControl = () => null;
      }
      if (!path.shouldStartDragging) {
        path.shouldStartDragging = () => false;
      }
      if (!path.onDragStart) {
        path.onDragStart = () => {};
      }
      if (!path.getActiveControl) {
        path.getActiveControl = () => null;
      }

      canvas.current.renderAll();
      handleSave({ canvas });
    });

    // Object removal handler
    canvas.current.on("object:removed", (e) => {
      if (e.target && e.target.dispose) {
        e.target.dispose();
      }
    });

    // Error handling
    canvas.current.on("error", (err) => {
      console.error("Canvas error:", err);
    });

    // Initial save
    handleSave({ canvas });

    // Cleanup
    return () => {
      if (canvas.current) {
        canvas.current.dispose();
        canvas.current = null;
      }
    };
  }, []);
  // Handle Shape Selection
  useEffect(() => {
    if (!canvas.current) return;
    const handleSelectionCleared = () => {
      setSelectedShape(null);
      setProperties({
        width: 0,
        height: 0,
        radius: 0,
        side: 0,
        rx: 0,
        ry: 0,
        strokeWidth: 3,
        fill: "#FFFFFF",
      });
    };
    canvas.current.on("selection:created", () =>
      handleSelection({ canvas, setSelectedShape, setProperties })
    );
    canvas.current.on("selection:updated", () =>
      handleSelection({ canvas, setSelectedShape, setProperties })
    );
    canvas.current.on("object:modified", () =>
      handleSelection({ canvas, setSelectedShape, setProperties })
    );
    canvas.current.on("selection:cleared", () => handleSelectionCleared);
  }, [canvas.current]);
  return (
    <>
      <canvas id="canvas" />
      <CanvasAdjust canvas={canvas} />
      <SaveStateToBack />
    </>
  );
}
export default CanvasComponent;
