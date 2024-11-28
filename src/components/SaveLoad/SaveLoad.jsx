import { useEffect } from "react";
import axios from "axios";

function SaveLoad({ canvas }) {
  const saveCanvasAsJSON = () => {
    if (!canvas.current) return;
    const canvasData = canvas.current.toJSON();
    const jsonString = JSON.stringify(canvasData, null, 2);
    saveToDisk(jsonString);
  };

  const saveToDisk = async (jsonString) => {
    if (window.showSaveFilePicker) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: "canvas.json",
          types: [
            {
              description: "JSON Files",
              accept: { "application/json": [".json"] },
            },
          ],
        });
        const writable = await handle.createWritable();
        await writable.write(jsonString);
        await writable.close();
        alert("Canvas saved successfully!");
      } catch (error) {
        console.error("Error saving file:", error);
      }
    } else {
      fallbackSave(jsonString);
    }
  };

  const fallbackSave = (jsonString) => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "canvas.json";
    link.click();
  };

  const loadCanvasFromJSON = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const loadedData = JSON.parse(reader.result);

          canvas.current.loadFromJSON(loadedData, () => {
            canvas.current.renderAll();
          });

          // Optional: Force a slight delay to ensure render is immediate
          setTimeout(() => {
            canvas.current.renderAll();
          }, 0);
        } catch (error) {
          alert("Failed to load the canvas. Invalid JSON file.");
          console.error("Error loading JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  // Save the canvas state to the backend
  async function saveCanvasState(canvasJson) {
    try {
      await axios.post("http://localhost:8080/api/canvas/save", canvasJson, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Failed to save canvas state:", error);
    }
  }
  useEffect(() => {
    if (!canvas.current) return;
    // Add event listener for changes on the Fabric.js canvas
    canvas.current.on("object:added", handleSave);
    canvas.current.on("object:modified", handleSave);
    canvas.current.on("object:removed", handleSave);

    // Cleanup the event listeners on component unmount
    return () => {
      canvas.current.off("object:added", handleSave);
      canvas.current.off("object:modified", handleSave);
      canvas.current.off("object:removed", handleSave);
    };
  });

  function handleSave() {
    const canvasJson = canvas.current.toJSON();
    const jsonString = JSON.stringify(canvasJson, null, 2);
    console.log(jsonString);
    saveCanvasState(jsonString);
  }

  return (
    <div className="container">
      <button onClick={saveCanvasAsJSON} className="button">
        💾 Save
      </button>

      {}
      <input
        type="file"
        accept="application/json"
        onChange={loadCanvasFromJSON}
        style={{ display: "none" }}
        id="loadCanvasInput"
      />
      <button
        onClick={() => document.getElementById("loadCanvasInput").click()}
        className="button"
      >
        📂 Load
      </button>
    </div>
  );
}

export default SaveLoad;
