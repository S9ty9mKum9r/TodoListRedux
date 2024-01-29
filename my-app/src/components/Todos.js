import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {removeTodo,updateTodo} from '../features/todo/todoSlice'
import './Todos.css'
function Todos() {
  const todos=useSelector(state=> state.todos)
  const dispatch=useDispatch()
  const updateTodoHandler = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };
  return (
    <div className='Mylist'>
      <h3>Todos</h3> 
      <div className='Mymaindiv'>
      {todos.map((todo) => (
        <li className='myList' key={todo.id}>
          <input id='Myinput1'
            type="text"
            value={todo.text}
            onChange={(e) => updateTodoHandler(todo.id, e.target.value)}
          />
          <button className='Mybtn' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
      </div>
    </div>
  );
}

export default Todos;
