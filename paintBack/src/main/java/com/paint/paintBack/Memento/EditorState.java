package com.paint.paintBack.Memento;

public class EditorState {
    private final String canvasState; // JSON string

    public EditorState(String canvasState) {
        this.canvasState = canvasState;
    }

    public String getContent() {
        return canvasState;
    }
}