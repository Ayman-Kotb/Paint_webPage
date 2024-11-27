
import { BsBrushFill } from "react-icons/bs";
import { IoStop } from "react-icons/io5"; // Stop icon

function FreeHand({ canvas, color , size, setSize }) {

    const enablePencil = () => {
        if (!canvas.current) return;

        // Set up the brush
        const brush = new window.fabric.PencilBrush(canvas.current);
        brush.color = color;
        brush.width = size ;
        canvas.current.freeDrawingBrush = brush;

        // Enable drawing mode
        canvas.current.isDrawingMode = true;
        canvas.current.selection=false;

        canvas.current.forEachObject((obj) => {
            obj.selectable = false;
            obj.evented = false;
        });

        canvas.current.renderAll();
    };

    const disablePencil = () => {
        if (!canvas.current) return;

        canvas.current.isDrawingMode = false; // Disable drawing mode
        canvas.current.selection = true; // Enable selection
    
        // Ensure all objects are properly interactive
        canvas.current.forEachObject((obj) => {
            obj.set({
                selectable: true,
                evented: true,
                hasControls: true,
                hasBorders: true,
                lockScalingX: false,
                lockScalingY: false,
                lockRotation: false,
            });
    
            // Add fallback methods to prevent errors
            if (!obj.getActiveControl) {
                obj.getActiveControl = () => null;
            }
            if (!obj.shouldStartDragging) {
                obj.shouldStartDragging = () => false;
            }
            if (!obj.onDragStart) {
                obj.onDragStart = () => {};
            }
        });
   
        canvas.current.renderAll();
    };

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSize(newSize);
        if (canvas.current.freeDrawingBrush) {
            canvas.current.freeDrawingBrush.width = newSize;
            canvas.current.renderAll();
        }
    };

    return (
        <div className="container">
            <button onClick={enablePencil} className="button">
                <BsBrushFill /> {/* Brush icon to start drawing */}
            </button>
            <button onClick={disablePencil} className="button">
                <IoStop /> {/* Stop icon to disable drawing */}
            </button>
            <label htmlFor="brushSize" style={{ fontSize: "20px" }}>Brush Size: </label>
                <input
                    id="brushSize"
                    type="range"
                    min="1"
                    max="20"
                    value={size}
                    onChange={handleSizeChange}
                />
                <span style={{ margin: "10px" , fontSize: "20px"}}>{size}</span> {/* Display the current brush size */}
        </div>
    );
}

export default FreeHand;
