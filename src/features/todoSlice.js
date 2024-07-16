import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{
        id:1,
        text:"hello",
        completed:false
    }]
}

// Create todoSlice for managing todos
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{

        // Reducer to add a new todo
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },

        // Reducer to remove a todo
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },

        // Reducer to update a todo
        updateTodo:(state,action)=>{
            const {id, text}=action.payload
            const todo=state.todos.findIndex((todo)=>todo.id===id)
            if(todo >= 0){
                state.todos[todo]={
                    ...state.todos[todo],
                    text:text
                }
            }
        },

        // Reducer to toggle the completion status of a todo
        toggleComplete:(state,action)=>{
            const {id}=action.payload
            const todo=state.todos.find((todo)=>todo.id === id);
            if(todo){
                todo.completed=!todo.completed;
            }
        }
    }
})

// Export actions for adding, removing, updating, and toggling todos
export const{addTodo, removeTodo, updateTodo, toggleComplete}=todoSlice.actions
export default todoSlice.reducer
