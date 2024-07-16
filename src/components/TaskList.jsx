import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleComplete } from '../features/todoSlice';

function TaskList() {

    const[editable,setEditable]=useState(null)
    const[msg,setMsg]=useState("")

    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos);

    const editTodo=(id)=>{
        dispatch(updateTodo({
            id,text:msg
        }))
        setEditable(null)
    }

    const toggleCompleted=(id)=>{
        dispatch(toggleComplete({id}))
    }

    const handleDelete=(id)=>{
        dispatch(removeTodo(id))
    }
    

  return (
    <div>
        {/* Display todos */}
        {todos.map((todo) => (
            <div key={todo.id} className={`todo-container ${todo.completed ? "todo-bg-purple" : "todo-bg-blue"}`}>
                <div className='todo-wrapper'>

                    {/* Checkbox to mark todo as completed */}
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={()=>toggleCompleted(todo.id)}
                    />

                    {/* Input to display/edit todo text */}
                    <input 
                        type="text"
                        className={`todo-text ${editable===todo.id ? "todo-text-border-black" : "todo-text-border-transparent"} ${todo.completed ? "todo-text-done" : ""}`}
                        value={editable===todo.id?msg:todo.text}
                        onChange={(e) => setMsg(e.target.value)}
                        readOnly={editable!==todo.id} 
                    />
                </div>
                <div className='buttons'>

                    {/* Button to edit/save todo */}
                    <button 
                        onClick={() => {
                            if (todo.completed) return;
                            if (editable===todo.id) {
                                editTodo(todo.id);
                            } else {
                                setEditable(todo.id);
                                setMsg(todo.text)
                            }
                        }}
                        className={`edit-save-btn border  ${todo.completed ? "edit-save-btn-done" :""}`}
                        disabled={todo.completed}
                    >
                        {editable===todo.id ? <FaSave /> :  <MdEdit/>}
                    </button>

                    {/* Button to delete todo */}
                    <button 
                        onClick={()=>handleDelete(todo.id)}
                        className='delete-btn'
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>
        ))}
        </div>
  )
}

export default TaskList
