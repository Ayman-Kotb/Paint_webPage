import axios from "axios";
import { useEffect } from "react";

function SaveStateToBack() {
  useEffect(() => {
    async function clearHistory() {
      await axios.delete("http://localhost:8080/api/canvas/clearHistory");
    }
    clearHistory();
  }, []);
  return <></>;
}

  // Save the canvas state to the backend
  async function saveCanvasState(jsonString) {
    try {
      await axios.post("http://localhost:8080/api/canvas/save", jsonString, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Failed to save canvas state:", error);
    }
  }

export function handleSave({canvas}) {
    const canvasJson = canvas.current.toJSON();
    const jsonString = JSON.stringify(canvasJson, null, 2);
    console.log(canvasJson);
    saveCanvasState(jsonString);
}

export default SaveStateToBack;
