import React from 'react';

const TodoItem = (props) => {
  const todoStyle = () => ({
    textDecoration: 'none',
    padding: '10px',
    borderBottom: '1px #ccc solid'
  });

  return (
    <div className="input-group input-group-lg mb-3" style={todoStyle()}>
      <input style={{ width: '30px', height: '30px' }} type="checkbox"/>
      <p className="lead ml-2">Do homework</p>
      <button className="btn btn-danger ml-3 pb-3 pt-1" style={{ height: '2rem', borderRadius: '20%' }}>&times;</button>
    </div>
  );
};

export default TodoItem;