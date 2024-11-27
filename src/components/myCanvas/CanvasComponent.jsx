
import {useState, useEffect} from "react"
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
    const [height, setHeight] = useState(450);
    const [width, setWidth] = useState(900);

    const changeHeight = (e) => {
        const theHeight = Number (e.target.value);
        setHeight(theHeight);
        canvas.current.setHeight(theHeight);
        canvas.current.renderAll();
    }
    const changeWidth = (e) => {
        const theWidth = Number (e.target.value);
        setWidth(theWidth);
        canvas.current.setWidth(theWidth);
        canvas.current.renderAll();
    }
    return(
        <div className="canvasContainer">
            <canvas id="canvas"/>
            <div className="canvasAdjustSize">
                <p>Change canvas size</p>
                <label>height: </label>
                <input 
                    type="range"
                    min="100" 
                    max="700" 
                    step="1" 
                    value={height} 
                    onChange={(e)=>changeHeight(e)}
                />
                <label>{height}</label>
                <br/>
                <label>width: </label>
                <input 
                    type="range"
                    min="100" 
                    max="1400" 
                    step="1" 
                    value={width} 
                    onChange={(e)=>changeWidth(e)}
                />
                <label> {width}</label>
            </div>
        </div>
    )  
}
export default CanvasComponent