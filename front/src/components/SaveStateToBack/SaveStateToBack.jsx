import axios from "axios";
import { useEffect } from "react";

function SaveStateToBack() {
  useEffect(() => {
    async function clearHistory() {
      await axios.delete("https://paintback-production.up.railway.app/api/canvas/clearHistory");
    }
    clearHistory();
  }, []);
  return <></>;
}

// Save the canvas state to the backend
async function saveCanvasState(jsonString) {
  try {
    await axios.post("https://paintback-production.up.railway.app/api/canvas/save", jsonString, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to save canvas state:", error);
  }
}
function debounce(func, delay) {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const handleSave = debounce(({ canvas }) => {
  const canvasJson = canvas.current.toJSON();
  const jsonString = JSON.stringify(canvasJson, null, 2);
  // console.log("Saving canvas state:", canvasJson);
  saveCanvasState(jsonString);
}, 500);

export default SaveStateToBack;
