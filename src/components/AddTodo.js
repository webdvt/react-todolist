import React, { useState } from 'react';

const AddTodo = (props) => {

  // Todo: create a "newTodo" state using "useState" hook.

  const onSubmit = (e) => {
    e.preventDefault();
    // Todo: add "newTodo" using "addTodo" function
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-control px-3 py-4"
          type="text"
          name="title"
          placeholder="Enter a Todo..."
          /* Add an "onChange" handler and call "setNewTodo()" function */
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

export default AddTodo;