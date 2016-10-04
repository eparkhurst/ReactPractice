import React from 'react';
import Slider from './Slider';

const App = React.createClass({
  getInitialState(){
    return {
      red:128,
      green:128,
      blue:128
    }
  },
  updateColors(color, value){
    const nextState = Object.assign({},this.state, {[color]:value})
    this.setState(nextState)
  },

  render() {
    return <div>
      <h3>My first Color Slider</h3>
      <h4>R:{this.state.red}   G:{this.state.green}   B:{this.state.blue}</h4>
      <div className = "colorDiv" style={{backgroundColor : `rgb(${this.state.red},${this.state.green},${this.state.blue})`}}>
        <Slider color="red" updateColors = {this.updateColors}/>
        <Slider color="green" updateColors = {this.updateColors}/>
        <Slider color="blue" updateColors = {this.updateColors}/>
      </div>
    </div>;
  }
});

export default App;
