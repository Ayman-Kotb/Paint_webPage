package com.paint.paintBack.Memento;

import java.util.Stack;

public class History {
    private Stack<EditorState> Back = new Stack<EditorState>();
    private Stack<EditorState> Forward = new Stack<EditorState>();

    public void push(EditorState state){
        Back.push(state);
        Forward.clear();
    }
    public EditorState undo(){
        if(Back.size()>1){
            EditorState state = Back.pop();
            Forward.push(state);
            return Back.peek();
        }else {
            throw new IllegalStateException("Cannot undo");
        }
    }
    public EditorState redo(){
        if(!Forward.isEmpty()){
            EditorState state = Forward.pop();
            Back.push(state);
            return state;
        }else {
            throw new IllegalStateException("Cannot redo");
        }
    }

    public boolean isEmpty() {
        return Back.isEmpty();
    }
}
