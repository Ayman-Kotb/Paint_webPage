package com.lab2.paint.back.Memento;

public class EditorState {
    private final String canvasState; // JSON string

    public EditorState(String canvasState) {
        this.canvasState = canvasState;
    }

    public String getContent() {
        return canvasState;
    }
}