import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

function TaskInput() {

    const[todo,setTodo]=useState("")
    const dispatch=useDispatch()

    const handleAdd=(e)=>{
        e.preventDefault()

        // Check if todo is not empty
        if(!todo) return

         // Dispatch action to add todo
        dispatch(addTodo(todo))

        // Clear input after adding todo
        setTodo("")
    }

  return (
    <form onSubmit={handleAdd}>

        {/* Input field for adding todo */}
        <input 
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} 
        placeholder="What's the plan?"
        className='input-todo'/>

        {/* Button to add todo */}
        <button 
        type='submit'
        className='add-btn'>
            Add
        </button>
    </form>
  )
}

export default TaskInput
