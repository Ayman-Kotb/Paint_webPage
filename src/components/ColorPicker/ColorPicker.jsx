import { useState } from "react"
import ColorDisplay from "./ColorDisplay"
import "./colorPicker.css"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")
    
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <div className="colorPicker_container">
            <ColorDisplay color={color}/>
            <p>pick:</p>
            <input type="color" value={color} onChange={handleColorChange} className="picker"/>
        </div>
    )
}
export default ColorPicker