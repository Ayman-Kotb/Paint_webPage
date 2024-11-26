import "./colorPicker.css";

function ColorPicker({ color, setColor }) {
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="colorPicker_container">
            <p>Pick a color:</p>
            <input
                type="color"
                value={color} // Use the color prop here
                onChange={handleColorChange} // Update the color when the user selects a new color
                className="picker"
                title="Click to choose a color" // Optional: Adding a title for extra information on hover
            />
            <div className="color-display" style={{ backgroundColor: color }}>
                {/* Display the currently selected color */}
                <p>{color}</p>
            </div>
        </div>
    );
}

export default ColorPicker;
