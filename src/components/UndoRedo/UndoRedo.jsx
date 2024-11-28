import axios from "axios";

function UndoRedo({ canvas }) {
  // Save the canvas state to the backend
  async function saveCanvasState(canvasJson) {
    try {
      await axios.post('/api/canvas/save', canvasJson, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error("Failed to save canvas state:", error);
    }
  }

  // Undo action
  async function undo() {
    try {
      const response = await axios.get('/api/canvas/undo');
      const data = response.data;

      if (data.error) {
        console.error(data.error); // Log error from backend
        return;
      }
      console.log(canvas.current)
      canvas.current.loadFromJSON(data, () => {
        canvas.current.renderAll(); // Render the updated canvas state
      });
    } catch (error) {
      console.error("Undo failed:", error);
      console.log(data);
    }
  }

  // Redo action
  async function redo() {
    try {
      const response = await axios.get('/api/canvas/redo');
      const data = response.data;

      if (data.error) {
        console.error(data.error); // Log error from backend
        return;
      }

      canvas.current.loadFromJSON(data, () => {
        canvas.current.renderAll(); // Render the updated canvas state
      });
    } catch (error) {
      console.error("Redo failed:", error);
      console.log(data);
    }
  }

  return (
    <div className="container">
      <button className="button" onClick={undo}>Undo</button>
      <button className="button" onClick={redo}>Redo</button>
    </div>
  );
}

export default UndoRedo;