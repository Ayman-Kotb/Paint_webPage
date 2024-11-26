import ColorPicker from "../ColorPicker/ColorPicker";
import "./menuBar.css"
import Buttons from "../Buttons/Buttons.jsx";
import FreeHand from "../FreeHand/FreeHand.jsx";
import SaveLoad from "../SaveLoad/SaveLoad.jsx";

function MenuBar({canvas}) {
    return(
        <div className="menuBar_container">
            <ColorPicker/>
            <Buttons canvas={canvas}/>
            <FreeHand/>
            <SaveLoad/>
        </div>
    )
}
export default MenuBar