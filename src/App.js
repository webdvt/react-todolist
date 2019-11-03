import React, { useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';

const App = () => {
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

  const toggleComplete = (id) => {
    // ...
  };

  const deleteTodo = (id) => {
    // ...
  };

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
            <Todos/>
            <br/>
            <AddTodo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
