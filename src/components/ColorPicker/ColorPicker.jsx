import ColorDisplay from "./ColorDisplay";
import "./ColorPicker.css";

function ColorPicker({ color, setColor }) {
    function handleColorChange(event) {
        setColor(event.target.value);
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
