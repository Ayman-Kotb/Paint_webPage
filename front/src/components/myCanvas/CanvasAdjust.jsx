import React, { useState } from "react";


function CanvasAdjust({ canvas }) {
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
            <div className="canvasAdjustSize">
                <p>Change canvas size</p>
                <label>Width: </label>
                <input 
                    type="range"
                    min="100" 
                    max="1300" 
                    step="1" 
                    value={width} 
                    onChange={(e)=>changeWidth(e)}
                />
                <label> {width}</label>
                <br/><br/>
                <label>Height: </label>
                <input 
                    type="range"
                    min="100" 
                    max="700" 
                    step="1" 
                    value={height} 
                    onChange={(e)=>changeHeight(e)}
                />
                <label>{height}</label>
                
            </div>
        </div>
    )
}

export default CanvasAdjust