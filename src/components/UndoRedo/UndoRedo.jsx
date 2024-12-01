import axios from "axios";

function UndoRedo({ canvas, setSelectedShape }) {

  // Undo action
  async function undo() {
    try {
      setSelectedShape(null);
      const response = await axios.get('http://localhost:8080/api/canvas/undo');
      const data = response.data;

      if (data.error) {
        console.error("redo Error: ",data.error); // Log error from backend
        return;
      }

      const jsonString = JSON.stringify(data, null, 2);
      // console.log(jsonString);
      const jsonData = JSON.parse(jsonString);
      //console.log(jsonData);

      canvas.current.loadFromJSON(jsonData, () => {
        canvas.current.renderAll(); // Render the updated canvas state
      });
      clearTimeout();
      setTimeout(() => {
        canvas.current.renderAll();
      }, 0);
    } catch (error) {
      window.alert("you did nothing to undo 🗿");
    }
  }

  // Redo action
  async function redo() {
    try {
      setSelectedShape(null);
      const response = await axios.get('http://localhost:8080/api/canvas/redo');
      const data = response.data;

      if (data.error) {
        console.error("redo Error: ",data.error); // Log error from backend
        return;
      }
      const jsonString = JSON.stringify(data, null, 2);
      console.log(jsonString);
      const jsonData = JSON.parse(jsonString);
      canvas.current.loadFromJSON(jsonData, () => {
        canvas.current.renderAll(); // Render the updated canvas state
      });
      clearTimeout();
      setTimeout(() => {
        canvas.current.renderAll();
      }, 0);
    } catch (error) {
      window.alert("you undid nothing to redo 🗿");
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