
import {useRef, useEffect} from "react"
import {Canvas} from "fabric"
import "./CanvasComponent.css"

function CanvasComponent({canvas}){
    const canvasRef = useRef(null)
    useEffect(()=>{
        if(canvasRef.current){
            const startCanvas = new Canvas(canvasRef.current,{
                height: 450,
                width: 900,
            });
            startCanvas.renderAll();
            canvas.current = startCanvas;
            return () =>{
                startCanvas.dispose();
            }
        }
    }, []);

    return(
        <canvas ref={canvasRef} id="canvas"/>
    )  
}
export default CanvasComponent