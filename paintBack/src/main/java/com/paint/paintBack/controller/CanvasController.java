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

            System.out.println("undone state: \n"+history.Forward.peek().getContent());
            System.out.println("forward size: "+history.Forward.size());

            editor.restore(prevState);
            System.out.println("current state: \n"+editor.getCanvasState());

            return editor.getCanvasState();
        }catch (Exception e){
            return "Can't undo due to empty stack";
        }
    }
    @GetMapping("/redo")
    public String redo() {
        try {
            EditorState nextState = history.redo();
            System.out.println("redone state: \n"+nextState.getContent());
            System.out.println("forward size after redoing: "+history.Forward.size());
            editor.restore(nextState);
            return editor.getCanvasState();
        } catch (Exception e) {
            System.out.println("empty");
            return "Can't redo due to empty stack";
        }
    }
    @DeleteMapping("/clearHistory")
    public void clearHistory() {
        history.clear();
        System.out.println("History cleared.");
    }
}