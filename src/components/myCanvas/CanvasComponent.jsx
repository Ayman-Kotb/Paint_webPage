
import {useRef, useEffect} from "react"
import {Canvas} from "fabric"
import "./CanvasComponent.css"

function CanvasComponent({canvas}){
        useEffect(()=>{
            const startCanvas = new Canvas("canvas",{
                height: 450,
                width: 900,
            });
            canvas.current = startCanvas;
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
            return () =>{
                startCanvas.dispose();
            }
    }, []);

    return(
        <canvas id="canvas"/>
    )  
}
export default CanvasComponent