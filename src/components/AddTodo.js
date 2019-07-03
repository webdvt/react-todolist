import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddTodo = ({ addTodo }) => {

  const [newTodo, setNewTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-control px-3 py-4"
          type="text"
          name="title"
          placeholder="Enter a Todo..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add Todo"
        />
      </div>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;