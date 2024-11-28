package com.lab2.paint.back.controller;

import com.lab2.paint.back.Memento.Editor;
import com.lab2.paint.back.Memento.EditorState;
import com.lab2.paint.back.Memento.History;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/canvas")
@CrossOrigin(origins = "http://localhost:5173")
public class CanvasController {
    private final Editor editor = new Editor();
    private final History history = new History();

    @PostMapping("/save")
    public ResponseEntity<?> saveState(@RequestBody String canvasJson) {
        if (canvasJson == null || canvasJson.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("{\"error\":\"Canvas state cannot be empty\"}");
        }
        editor.setCanvasState(canvasJson);
        history.push(editor.createState());
        return ResponseEntity.ok("{\"message\":\"State saved successfully\"}");
    }

    @GetMapping("/undo")
    public ResponseEntity<?> undo() {
        try {
            EditorState previousState = history.undo();
            editor.restore(previousState);
            return ResponseEntity.ok(editor.getCanvasState());
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("{\"error\":\"Cannot undo\"}");
        }
    }

    @GetMapping("/redo")
    public ResponseEntity<?> redo() {
        try {
            EditorState nextState = history.redo();
            editor.restore(nextState);
            return ResponseEntity.ok(editor.getCanvasState());
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("{\"error\":\"Cannot redo\"}");
        }
    }
}