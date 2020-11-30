import React, { useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';

const initialTodos = [
  {
    title: 'Take out the trash',
    id: uuid.v4(),
    completed: false
  },
  {
    title: 'Get grocery',
    id: uuid.v4(),
    completed: false
  },
  {
    title: 'Meeting with my adviser',
    id: uuid.v4(),
    completed: false
  }
];

const App = () => {

  // TODO: create "todos" state with useState() function.

  const toggleComplete = (id) => {
    // ...
  };

  /**
   * Remove the todo item with the "id"  using JS array filter.
   * @param id
   */
  const deleteTodo = (id) => {
    // ...
  };

  /**
   * Add a new todo.
   * @param title
   */
  const addTodo = (title) => {
    // ...
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Header/>
          <br/>
          <div className="container bg-dark p-3">
            <Todos /* pass in JSX attribute: todos, toggleComplete, deleteTodo*/ />
            <br/>
            <AddTodo /* pass in JSX attribute: addTodo*/ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
