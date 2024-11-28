import axios from "axios";

function UndoRedo({ canvas }) {
  async function saveCanvasState(canvasJson) {
    try {
      await axios.post('/api/canvas/save', canvasJson, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error("Failed to save canvas state:", error);
    }
  }
  
  async function undo() {
    try {
      const response = await axios.get('/api/canvas/undo');
      const data = response.data;

      if (data.error) {
        console.error(data.error);
        return;
      }
      if(data === "Cannot undo") return

      canvas.current.loadFromJSON(data, () => {
        canvas.current.renderAll();
      });
    } catch (error) {
      console.error("Undo failed:", error);
    }
  }

  async function redo() {
    try {
      const response = await axios.get('/api/canvas/redo');
      const data = response.data;

      if (data.error) {
        console.error(data.error);
        return;
      }
      if(data === "Cannot redo") return
      canvas.current.loadFromJSON(data, () => {
        canvas.current.renderAll();
      });
    } catch (error) {
      console.error("Redo failed:", error);
    }
  }

  return(
    <div className="container">
      <button className="button" onClick={undo}>Undo</button>
      <button className="button" onClick={redo}>Redo</button>
    </div>
  )
}
export default UndoRedo 