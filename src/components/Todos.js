import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

const Todos = ({ todos, toggleComplete, deleteTodo }) => (
  todos.map(todo => (
    <TodoItem todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
  )));

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todos;