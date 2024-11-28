package com.paint.paintBack.controller;

import com.paint.paintBack.Memento.Editor;
import com.paint.paintBack.Memento.EditorState;
import com.paint.paintBack.Memento.History;
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
            EditorState prevState = history.undo();
            editor.restore(prevState);
            return editor.getCanvasState();
        }catch (Exception e){
            throw new RuntimeException("cannot undo", e);
        }
    }
    @GetMapping("/redo")
    public String redo() {
        try {
            EditorState nextState = history.redo();
            editor.restore(nextState);
            return editor.getCanvasState();
        } catch (IllegalStateException e) {
            throw new RuntimeException("cannot redo", e);
        }
    }
}