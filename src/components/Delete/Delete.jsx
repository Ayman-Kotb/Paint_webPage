import { useEffect } from "react";
import { handleSave } from "../SaveStateToBack/SaveStateToBack";

function Delete({ canvas }) {
  const deleteSelected = () => {
    if (!canvas.current) return;

    try {
      // Store active selection/object before doing anything else
      const activeObj = canvas.current.getActiveObjects();
      if (!activeObj) return;
      canvas.current.discardActiveObject();
      activeObj.forEach((obj) => {
        // Remove from canvas
        canvas.current.remove(obj);
        // Explicitly dispose of the object
        if (obj.dispose) {
          obj.dispose();
        }
      });
      canvas.current.requestRenderAll();
      handleSave({ canvas });
    } catch (error) {
      console.error("Error during deletion:", error);
      // Try to recover canvas state
      canvas.current.renderAll();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key === "Delete" || e.key === "Backspace") &&
        canvas.current &&
        !canvas.current.isDrawingMode
      ) {
        e.preventDefault();
        deleteSelected();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="container">
      <button className="button" onClick={deleteSelected}>
        Delete
      </button>
    </div>
  );
}
export default Delete;
