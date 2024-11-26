import { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./MenuBar.css";
import Buttons from "../Buttons/Buttons.jsx";
import FreeHand from "../FreeHand/FreeHand.jsx";
import SaveLoad from "../SaveLoad/SaveLoad.jsx";
import Delete from "../Delete/Delete.jsx";
import UndoRedo from "../UndoRedo/UndoRedo.jsx";

function MenuBar({ canvas }) {
    const [color, setColor] = useState("#000000"); // Manage color state in MenuBar
    const [size, setSize] = useState(5); // Manage size state in MenuBar

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSize(newSize);
    };

    return (
        <div className="menuBar_container">
            <ColorPicker color={color} setColor={setColor} canvas={canvas} /> {/* Pass color and setColor to ColorPicker */}
            <Buttons canvas={canvas} color={color} size={size} /> {/* Pass size to Buttons */}
            <FreeHand canvas={canvas} color={color} size={size} /> {/* Pass size to FreeHand */}
            <label htmlFor="brushSize">Brush Size: </label>
                <input
                    id="brushSize"
                    type="range"
                    min="1"
                    max="20"
                    value={size}
                    onChange={handleSizeChange}
                />
                <span>{size}</span> {/* Display the current brush size */}
            <SaveLoad />
            <Delete canvas={canvas} />
            <UndoRedo />
            <div className="sizeInputContainer">
                
            </div>
        </div>
    );
}

export default MenuBar;
