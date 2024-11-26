import { useState } from "react";

import { BsBrushFill } from "react-icons/bs";
import { IoStop } from "react-icons/io5"; // Stop icon

function FreeHand({ canvas, color , size}) {
    const [isDrawing, setIsDrawing] = useState(false); // Track drawing state

    const enablePencil = () => {
        if (!canvas.current) return;

        // Disable interaction mode before enabling drawing
        canvas.current.isDrawingMode = true;

        const brush = new window.fabric.PencilBrush(canvas.current);
        brush.color = color;
        brush.width = size ;
        canvas.current.freeDrawingBrush = brush;

        // Set drawing mode flag
        setIsDrawing(true);
    };

    const disablePencil = () => {
        if (canvas.current) {
            canvas.current.isDrawingMode = false; // Disable drawing mode
        }

        // Set drawing mode flag
        setIsDrawing(false);
    };

    return (
        <div className="FreeHandContainer">
            <button onClick={enablePencil} className="button">
                <BsBrushFill /> {/* Brush icon to start drawing */}
            </button>
            <button onClick={disablePencil} className="button">
                <IoStop /> {/* Stop icon to disable drawing */}
            </button>
        </div>
    );
}

export default FreeHand;
