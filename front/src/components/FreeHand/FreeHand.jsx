import { BsBrushFill } from "react-icons/bs";
import { IoStop } from "react-icons/io5"; // Stop icon
import { handleSave } from "../SaveStateToBack/SaveStateToBack";

function FreeHand({ canvas, color, size, setSize }) {
    const enablePencil = () => {
        if (!canvas.current) return;
    
        // Set up the brush
        const brush = new window.fabric.PencilBrush(canvas.current);
        brush.color = color;
        brush.width = size;
        canvas.current.freeDrawingBrush = brush;
    
        // Enable drawing mode
        canvas.current.isDrawingMode = true;
        canvas.current.selection = false;
    
        // Disable selection for existing objects while drawing
        canvas.current.forEachObject((obj) => {
            obj.selectable = false;
            obj.evented = false;
        });
    
        canvas.current.renderAll();
    };
    
    const disablePencil = () => {
        if (!canvas.current) return;
    
        canvas.current.isDrawingMode = false;
        canvas.current.selection = true;
        canvas.current.freeDrawingBrush = null;
    
        // Re-enable selection for all objects
        canvas.current.forEachObject((obj) => {
            obj.set({
                selectable: true,
                evented: true,
                hasControls: true,
                hasBorders: true,
                lockScalingX: false,
                lockScalingY: false,
                lockRotation: false,
                strokeUniform: true
            });
    
            // Add required methods if they don't exist
            if (!obj.findControl) {
                obj.findControl = () => null;
            }
            if (!obj.shouldStartDragging) {
                obj.shouldStartDragging = () => false;
            }
            if (!obj.onDragStart) {
                obj.onDragStart = () => {};
            }
            if (!obj.getActiveControl) {
                obj.getActiveControl = () => null;
            }
        });
    
        const canvasJson = canvas.current.toJSON();
        canvas.current.loadFromJSON(canvasJson);
        clearTimeout();
        setTimeout(() => {
          canvas.current.renderAll();
        }, 0);
    };
    
    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setSize(newSize);
        if (canvas.current?.freeDrawingBrush) {
            canvas.current.freeDrawingBrush.width = newSize;
            canvas.current.renderAll();
        }
        handleSave({canvas})
    };

    return (
        <div className="container">
            <button onClick={enablePencil} className="button">
                <BsBrushFill />
            </button>
            <button onClick={disablePencil} className="button">
                <IoStop />
            </button>
            <label htmlFor="brushSize" style={{ fontSize: "20px" }}>
                Brush Size:{" "}
            </label>
            <input
                id="brushSize"
                type="range"
                min="1"
                max="20"
                value={size}
                onChange={handleSizeChange}
            />
            <span style={{ margin: "10px", fontSize: "20px" }}>{size}</span>
        </div>
    );
}

export default FreeHand;
