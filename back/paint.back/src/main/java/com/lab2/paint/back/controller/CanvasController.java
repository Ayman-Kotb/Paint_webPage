package com.lab2.paint.back.controller;

import com.lab2.paint.back.Memento.Editor;
import com.lab2.paint.back.Memento.EditorState;
import com.lab2.paint.back.Memento.History;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/canvas")
public class CanvasController {
    private final Editor editor = new Editor();
    private final History history = new History();

    @PostMapping("/save")
    public void saveState(@RequestBody String canvasJson) {
        editor.setCanvasState(canvasJson);
        history.push(editor.createState());
    }

    @GetMapping("/undo")
    public String undo() {
        try {
            EditorState previousState = history.undo();
            editor.restore(previousState);
            return editor.getCanvasState();
        } catch (IllegalStateException e) {
            return "Cannot undo";
        }
    }

    @GetMapping("/redo")
    public String redo() {
        try {
            EditorState nextState = history.redo();
            editor.restore(nextState);
            return editor.getCanvasState();
        } catch (IllegalStateException e) {
            return "Cannot redo";
        }
    }
}