import React, {Component} from 'react';
import PropTypes from "prop-types";

class Todoitem extends Component {

   // Dynamic styling
   getStyle = () => {
      return {
         textDecoration: this.props.todo.completed ? 'line-through' : 'none',
         padding: '10px',
         borderBottom: '1px #ccc solid'
      }
   };

   render() {
      const {id, title} = this.props.todo;
      return (
         <div className="input-group input-group-lg mb-3" style={this.getStyle()}>
            <input style={{width: '30px', height: '30px'}} type="checkbox" aria-label="Checkbox for following text input" onChange={this.props.toggleComplete.bind(this, id)}/>
            <p className="lead">{title}</p>
            <button className="btn btn-danger ml-3 pb-3 pt-1" style={{height: '2rem', borderRadius: '20%'}} onClick={this.props.deleteTodo.bind(this, id)}>&times;</button>
         </div>
      );
   }
}

// PropTypes
Todoitem.propTypes = {
   todo: PropTypes.object.isRequired
};

export default Todoitem;