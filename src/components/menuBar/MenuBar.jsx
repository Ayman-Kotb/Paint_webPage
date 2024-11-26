import ColorPicker from "../ColorPicker/ColorPicker";
import "./menuBar.css"
import Buttons from "../Buttons/Buttons.jsx";
import FreeHand from "../FreeHand/FreeHand.jsx";
import SaveLoad from "../SaveLoad/SaveLoad.jsx";

function MenuBar() {
    return(
        <div className="menuBar_container">
            <ColorPicker/>
            <Buttons/>
            <FreeHand></FreeHand>
            <SaveLoad></SaveLoad>
        </div>
    )
}
export default MenuBar