import React from 'react';

const ListItem= React.createClass({
  remove(){
    this.props.removeItem(this.props.item)
  },
  editItem(){

  },
  render(){
    return <li>
      <p>{this.props.item}</p>
      <input
        type= 'text'
        className= 'hidden'
      />
      <button onClick = {this.remove}>X</button>
      <button onClick = {this.editItem }>Edit</button>
    </li>
  }
})

export default ListItem;
