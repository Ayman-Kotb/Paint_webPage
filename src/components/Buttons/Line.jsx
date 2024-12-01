export const makeLine = (canvas, color, setIsLine, lineRef) => {
  setIsLine(true);

  // Disable selection while drawing the line
  canvas.selection = false;
  canvas.forEachObject((obj) => obj.set("selectable", false));

  // Attach mouse events for line drawing
  canvas.on("mouse:down", (event) => startAddingLine(event, canvas, color, lineRef));
  canvas.on("mouse:move", (event) => startDrawingLine(event, canvas, lineRef));
  canvas.on("mouse:up", (event) => stopLineDrawingMode(canvas, setIsLine, lineRef));

  // Handle escape to cancel line-drawing mode
  window.addEventListener("keydown", handleEscape);
};

const startAddingLine = (event, canvas, color, lineRef) => {
  const pointer = canvas.getPointer(event.e);

  // Initialize a new line
  const newLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
    stroke: color,
    strokeWidth: 3,
    selectable: false,
    evented: false,
  });

  // Reference the line being drawn
  lineRef.current = newLine;

  // Add the line to the canvas
  canvas.add(newLine);
};

const startDrawingLine = (event, canvas, lineRef) => {
  if (!lineRef.current || event.e.button !== 0) return;

  // Update the endpoint of the line to follow the mouse
  const pointer = canvas.getPointer(event.e);
  lineRef.current.set({
    x2: pointer.x,
    y2: pointer.y,
  });

  // Re-render the canvas
  canvas.renderAll();
};

const finalizeLine = (event, canvas, lineRef) => {
  if (!lineRef.current) return;

  // Finalize the current line's properties
  lineRef.current.set({
    selectable: true,
    evented: true,
  });

  // Clear the reference for the current line to start a new one
  lineRef.current = null;
};

// Function to stop the line-drawing mode
export const stopLineDrawingMode = (canvas, setIsLine, lineRef) => {
  console.log("stopping line is called");
  lineRef.current.set({
    selectable: true,
    evented: true,
    hasControls: true,
    hasBorders: true,
    lockScalingX: false,
    lockScalingY: false,
    lockRotation: false,
    strokeUniform: true
});

// Add required methods if they don't exist
if (!lineRef.current.findControl) {
    lineRef.current.findControl = () => null;
}
if (!lineRef.current.shouldStartDragging) {
    lineRef.current.shouldStartDragging = () => false;
}
if (!lineRef.current.onDragStart) {
    lineRef.current.onDragStart = () => {};
}
if (!lineRef.current.getActiveControl) {
    lineRef.current.getActiveControl = () => null;
}

  // Reset line reference
  lineRef.current = null;

  // Exit line-drawing mode
  setIsLine(false);

  // Re-enable selection on the canvas
  canvas.selection = true;
  canvas.forEachObject((obj) => obj.set("selectable", true));

  // Detach mouse events
  canvas.off("mouse:down");
  canvas.off("mouse:move");
  canvas.off("mouse:up");

  // Optionally remove the escape key listener
  window.removeEventListener("keydown", handleEscape);

  // Re-render the canvas
  const canvasJson = canvas.toJSON();
        canvas.loadFromJSON(canvasJson);
        clearTimeout();
        setTimeout(() => {
          canvas.renderAll();
        }, 0);
  canvas.renderAll();
};

const handleEscape = (event) => {
  if (event.key === "Escape") {
    dis();
    window.removeEventListener("keydown", handleEscape);
  }
};