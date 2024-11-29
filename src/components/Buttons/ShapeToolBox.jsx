import { handleSave } from "../SaveStateToBack/SaveStateToBack";

function ShapeToolBox({ properties, setProperties, selectedShape, canvas }) {
  const updateProperty = (property, value) => {
    if (!selectedShape) return;
    if (property === "width" || property === "height") {
      const scaleValue =
        value /
        (property === "width" ? selectedShape.width : selectedShape.height);
      if (property === "width") {
        selectedShape.scaleX = scaleValue;
      } else {
        selectedShape.scaleY = scaleValue;
      }
    } else if (property === "radius") {
      selectedShape.set("radius", value);
    } else if (property === "side") {
      selectedShape.set("width", value);
      selectedShape.set("height", value);
    } else if (property === "rx" || property === "ry") {
      const scaleValue =
        value / (property === "rx" ? selectedShape.rx : selectedShape.ry);
      if (property === "rx") {
        selectedShape.scaleX = scaleValue;
      } else {
        selectedShape.scaleY = scaleValue;
      }
    } else if (property === "strokeWidth") {
      selectedShape.set("strokeWidth", value);
    } else {
      selectedShape.set(property, value);
    }
    setProperties((prev) => ({ ...prev, [property]: value }));
    handleSave({ canvas });
    canvas.current.renderAll();
  };

  return (
    <div className="toolbox">
      <p>Edit Shape Properties</p>
      {(
        (selectedShape.type === "rect" &&
          selectedShape.get("width") !== selectedShape.get("height")) ||
        (selectedShape.type === "triangle")
      ) && (
          <>
            <label>
              Width:
              <input
                type="range"
                min="10"
                max={canvas.current.getWidth()}
                step="1"
                value={properties.width}
                onChange={(e) =>
                  updateProperty("width", Number(e.target.value))
                }
              />
              <label>{Math.round(properties.width)}</label>
              <br />
              <br />
            </label>
            <label>
              Height:
              <input
                type="range"
                min="10"
                max={canvas.current.getHeight()}
                step="1"
                value={properties.height}
                onChange={(e) =>
                  updateProperty("height", Number(e.target.value))
                }
              />
              <label>{Math.round(properties.height)}</label>
              <br />
              <br />
            </label>
          </>
        )}
      {selectedShape.type === "circle" && (
        <label>
          Radius:
          <input
            type="range"
            min="10"
            max={canvas.current.getWidth() / 2}
            step="1"
            value={properties.radius}
            onChange={(e) => updateProperty("radius", Number(e.target.value))}
          />
          <label>
            {Math.round(properties.radius * selectedShape.get("scaleX"))}
          </label>
          <br />
          <br />
        </label>
      )}
      {selectedShape.type === "rect" &&
        selectedShape.get("width") === selectedShape.get("height") && (
          <label>
            Side:
            <input
              type="range"
              min="10"
              max={canvas.current.getWidth() / 2}
              step="1"
              value={properties.side}
              onChange={(e) => updateProperty("side", Number(e.target.value))}
            />
            <label>
              {Math.round(properties.side * selectedShape.get("scaleX"))}
            </label>
            <br />
            <br />
          </label>
        )}
      {selectedShape.type === "ellipse" && (
        <>
          <label>
            RadiusX:
            <input
              type="range"
              min="10"
              max={canvas.current.getWidth() / 2}
              step="1"
              value={properties.rx}
              onChange={(e) => updateProperty("rx", Number(e.target.value))}
            />
            <label>
              {Math.round(properties.rx * selectedShape.get("scaleX"))}
            </label>
            <br />
            <br />
          </label>
          <label>
            RadiusY:
            <input
              type="range"
              min="10"
              max={canvas.current.getWidth() / 2}
              step="1"
              value={properties.ry}
              onChange={(e) => updateProperty("ry", Number(e.target.value))}
            />
            <label>
              {Math.round(properties.ry * selectedShape.get("scaleY"))}
            </label>
            <br />
            <br />
          </label>
        </>
      )}
      <label>
        StrokeWidth:
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={properties.strokeWidth}
          onChange={(e) =>
            updateProperty("strokeWidth", Number(e.target.value))
          }
        />
        <label>{properties.strokeWidth}</label>
        <br />
        <br />
      </label>
      <label>
        Fill Color:
        <input
          className="picker"
          type="color"
          value={properties.fill}
          onChange={(e) => updateProperty("fill", e.target.value)}
        />
      </label>
    </div>
  );
}
export default ShapeToolBox;
