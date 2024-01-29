// App.js
import React from 'react';
import AddTodo from './components/AddTodo'; // Import AddTodo component
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
