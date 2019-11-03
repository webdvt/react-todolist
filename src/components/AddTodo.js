import React, { useState } from 'react';

const AddTodo = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-control px-3 py-4"
          type="text"
          name="title"
          placeholder="Enter a Todo..."
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