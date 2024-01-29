import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'
import './AddTodo.css'
function AddTodo() {
    const[input, setInput]=useState('');
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form className='Myform' onSubmit={addTodoHandler}>
        <input className='Myinput' type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
<button className='Mybtn' type='submit'>Submit</button>
    </form>
  )
}

export default AddTodo
