import React from 'react';

const App = React.createClass({
  getInitialState(){
    return {phrase:"Eli is legit"}
  },
  handleChange(event){
    const nextState  ={phrase:event.target.value}
    this.setState(nextState)
  },
  render() {
    let info = <div>
      <p>{this.state.phrase}</p>
    </div>

    const element = <div>
      <h1>Hello Eli</h1>
      <input
        onChange = {this.handleChange}
        type='text'
        value={this.state.phrase}
      ></input>
      {info}
    </div>
    return element;
  }
});

export default App;
