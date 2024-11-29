
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
          console.log(reader.result);
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
