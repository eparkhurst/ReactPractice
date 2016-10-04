import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

const App = React.createClass({
  getInitialState(){
    return {
      list:["thing1", "thing2"]
    }
  },
  handleClick(event){
    const newItem = ReactDOM.findDOMNode(this.refs.userInput).value;
    let oldList = this.state.list;
    oldList.push(newItem);
    console.log(oldList);
    this.setState({list:oldList});
  },
  removeItem(thing){
    let list = this.state.list;
    list.splice(list.indexOf(thing),1);
    console.log(list);
    this.setState({list:list});
  },
  render() {
    return <div>
      <h1>To Do App</h1>
      <input
        type='text'
        ref = 'userInput'
      />
      <button onClick = {this.handleClick}>Submit</button>
      {this.state.list.map((element, index)=>{
        return <ListItem
          removeItem = {this.removeItem}
          item = {element}
          key ={index}
        />
      })}
    </div>;
  }
});

export default App;
