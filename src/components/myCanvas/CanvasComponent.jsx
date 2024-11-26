
import {useRef, useState, useEffect} from "react"
import {Canvas} from "fabric"
import "./CanvasComponent.css"

function CanvasComponent(){
    const canvasRef = useRef(null)
    const [canvas, setCanvas] = useState(null)
    useEffect(()=>{
        if(canvasRef.current){
            const startCanvas = new Canvas(canvasRef.current,{
                height: 450,
                width: 900,
            })
            startCanvas.renderAll()
            setCanvas(startCanvas)
            return () =>{
                startCanvas.dispose()
            }
        }
    }, [])

    return(
        <canvas ref={canvasRef} className="canvas"/>
    )  
}
export default CanvasComponent