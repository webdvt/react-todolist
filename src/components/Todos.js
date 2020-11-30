import React from 'react';
import TodoItem from './TodoItem'

const Todos = (props) => (
  <div>
    {/* Todo: use JS array map and render "todos" */}
    <TodoItem /* Pass in JSX attributes: todo, key, toggleComplete, deleteTodo *//>
    <TodoItem/>
    <TodoItem/>
  </div>
  );

export default Todos;