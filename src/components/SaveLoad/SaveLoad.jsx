
function SaveLoad({canvas}){

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






    return(
      <div className="container">
        <button onClick={saveCanvasAsJSON} className="button">💾 Save</button> 
        <button className="button">Load</button>
      </div>
    )
}
export default SaveLoad 