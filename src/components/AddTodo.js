import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    title: ''
  };

  onChange = (e) => this.setState({ [e.target.name]: [e.target.value] });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control px-3 py-4"
            type="text"
            name="title"
            placeholder="Enter a Todo..."
            onChange={this.onChange}
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
  }
}

export default AddTodo;