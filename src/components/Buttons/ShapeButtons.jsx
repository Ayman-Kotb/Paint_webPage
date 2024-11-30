

function ShapeButtons({ canvas, addShape, color, setIsLine, lineRef }) {
  return (
    <>
      <button onClick={() => addShape({ typeOfShape: "circle" })} title="Circle" className="button">⚫</button>
      <button onClick={() => addShape({ typeOfShape: "ellipse" })} title="Ellipse" className="button">⬭</button>
      <button onClick={() => addShape({ typeOfShape: "line" })} title="Triangle" className="button">📏</button>
      <button onClick={() => addShape({ typeOfShape: "rectangle" })} title="Rectangle" className="button">█</button>
      <button onClick={() => addShape({ typeOfShape: "square" })} title="Square" className="button">⬛</button>
      <button onClick={() => addShape({ typeOfShape: "triangle" })} title="Triangle" className="button">🔺</button>
    </>
  );
}

export default ShapeButtons;
