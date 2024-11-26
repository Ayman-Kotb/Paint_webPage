import { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./MenuBar.css";
import Buttons from "../Buttons/Buttons.jsx";
import FreeHand from "../FreeHand/FreeHand.jsx";
import SaveLoad from "../SaveLoad/SaveLoad.jsx";

function MenuBar({canvas}) {
    const [color, setColor] = useState("#000000"); // Manage color state in MenuBar
    
    return (
        <div className="menuBar_container">
            <ColorPicker color={color} setColor={setColor} /> {/* Pass color and setColor to ColorPicker */}
            <Buttons canvas={canvas} color={color} /> {/* Pass the color prop to Buttons */}
            <FreeHand />
            <SaveLoad />
        </div>
    );
}

export default MenuBar;
