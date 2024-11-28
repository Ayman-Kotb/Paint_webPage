package com.lab2.paint.back.Memento;

public class Editor {
    private String canvasState; // JSON string representing canvas

    public String getCanvasState() {
        return canvasState;
    }

    public void setCanvasState(String canvasState) {
        this.canvasState = canvasState;
    }

    public EditorState createState() {
        return new EditorState(this.canvasState);
    }

    public void restore(EditorState state) {
        this.canvasState = state.getContent();
    }
}