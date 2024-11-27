import ColorDisplay from "./ColorDisplay";
import "./ColorPicker.css";

function ColorPicker({ color, setColor, canvas}) {
    function handleColorChange(event) {
        const theColor = event.target.value
        setColor(theColor);
        const active = canvas.current.getActiveObjects()
        if(active){
            active.forEach((obj) => {
              obj.set('fill', theColor);
              obj.set('stroke', theColor);
            })
            canvas.current.renderAll();
        }
        if (canvas.current.freeDrawingBrush) {
            canvas.current.freeDrawingBrush.color = theColor;
            canvas.current.renderAll();
        }
    }

    return (
        <div className="container">
            <p>Pick a color:</p>
            <input
                type="color"
                value={color} // Use the color prop here
                onChange={handleColorChange} // Update the color when the user selects a new color
                className="picker"
                title="Click to choose a color" // Optional: Adding a title for extra information on hover
            />
            <ColorDisplay props={color} />
        </div>
    );
}

export default ColorPicker;
