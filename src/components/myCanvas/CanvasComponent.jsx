import { useRef, useEffect } from "react";
import { Canvas, Group } from "fabric";
import "./CanvasComponent.css";

function CanvasComponent({ canvas }) {
    useEffect(() => {
        const startCanvas = new Canvas("canvas", {
            height: 450,
            width: 900,
        });

        canvas.current = startCanvas;

        // Existing feature for path creation
        canvas.current.on('path:created', (event) => {
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
            canvas.current.add(path);
            canvas.current.renderAll();
        });

        
        startCanvas.on("selection:created", (event) => {
            const selectedObjects = event.selected;

            if (selectedObjects.length > 1) {
          
                const group = new Group(selectedObjects, {
                    selectable: true,
                    evented: true,
                });

                
                selectedObjects.forEach((object) => {
                    startCanvas.remove(object);
                });

              
                startCanvas.add(group);
                startCanvas.setActiveObject(group);
                startCanvas.renderAll();
            }
        });

        return () => {
            startCanvas.dispose();
        };
    }, []);

    return <canvas id="canvas" />;
}

export default CanvasComponent;
