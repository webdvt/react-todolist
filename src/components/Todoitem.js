import React, {Component} from 'react';
import PropTypes from "prop-types";

class Todoitem extends Component {

   // Dynamic styling
   getStyle = () => {
      return {
         textDecoration: this.props.todo.completed ? 'line-through' : 'none',
         background: '#f4f4f4',
         padding: '10px',
         borderBottom: '1px #ccc dotted'
      }
   };

   // Renders the component in our browser
   render() {

      const {id, title} = this.props.todo;
      return (
         <div style={this.getStyle()}>
            <p>
               <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {'  '}
               {title}
               <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </p>
         </div>
      );
   }
}

// Delete button style
const btnStyle = {
   background: '#ff0000',
   color: '#fff',
   border: 'none',
   padding: '5px 9px',
   borderRadius: '50%',
   cursor: 'pointer',
   float: 'right'
};
// PropTypes
Todoitem.propTypes = {
   todo: PropTypes.object.isRequired
};



export default Todoitem;