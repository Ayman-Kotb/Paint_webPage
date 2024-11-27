import { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./MenuBar.css";
import Buttons from "../Buttons/Buttons.jsx";
import FreeHand from "../FreeHand/FreeHand.jsx";
import SaveLoad from "../SaveLoad/SaveLoad.jsx";
import Delete from "../Delete/Delete.jsx";
import UndoRedo from "../UndoRedo/UndoRedo.jsx";
import Copy from "../Copy/Copy.jsx";
import Setting from "../Setting/Setting.jsx";

function MenuBar({ canvas }) {
    const [color, setColor] = useState("#000000"); // Manage color state in MenuBar
    const [size, setSize] = useState(5); // Manage size state in MenuBar

    return (
        <div className="menuBar_container">
            <ColorPicker color={color} setColor={setColor} canvas={canvas} /> {/* Pass color and setColor to ColorPicker */}
            <Buttons canvas={canvas} color={color} size={size} /> {/* Pass size to Buttons */}
            <FreeHand canvas={canvas} color={color} size={size} setSize={setSize} /> {/* Pass size to FreeHand */}  
            <SaveLoad />
            <Copy canvas={canvas}/>
            <Delete canvas={canvas} />
            <UndoRedo />
            <Setting canvas={canvas}/> {/* Pass canvas to Setting */}
        </div>
    );
}

export default MenuBar;
