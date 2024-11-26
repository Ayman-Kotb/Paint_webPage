import ColorPicker from "../ColorPicker/ColorPicker";
import "./menuBar.css"
import Buttons from "../Buttons/Buttons.jsx";

function MenuBar() {
    return(
        <div className="menuBar_container">
            <ColorPicker/>
            <Buttons/>

        </div>
    )
}
export default MenuBar