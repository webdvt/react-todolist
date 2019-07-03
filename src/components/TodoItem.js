import React from 'react';
import PropTypes from "prop-types";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const todoStyle = () => ({
    textDecoration: todo.completed ? 'line-through' : 'none',
    padding: '10px',
    borderBottom: '1px #ccc solid'

  });

  const { id, title } = todo;

  return (
    <div className="input-group input-group-lg mb-3" style={todoStyle()}>
      <input style={{ width: '30px', height: '30px' }} type="checkbox"
             onChange={() => toggleComplete(id)}/>
      <p className="lead">{title}</p>
      <button className="btn btn-danger ml-3 pb-3 pt-1" style={{ height: '2rem', borderRadius: '20%' }}
              onClick={() => deleteTodo(id)}>&times;</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;