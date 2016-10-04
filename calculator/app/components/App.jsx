import React from 'react';

const App = React.createClass({
  getInitialState(){
    return {equation:'2'}
  },

  handleChange(event){
    const next = event.target.value

    this.setState({equation:next})
  },

  handleClear(event){
    this.setState({equation:''})
  },

  handleBtn(event){
    const next = this.state.equation + event.target.textContent;
    this.setState({equation:next})
  },
  eval(event){
    const matches = this.state.equation.match(/^(\-?\d+)(x|\/|\+|\-)(\-?\d+)$/);
    const ans  =this.evaluate(matches[2], Number(matches[1]), Number(matches[3]))

    this.setState({equation:ans})
    console.log(ans);
  },
  evaluate(operator, operand1, operand2){
    if (operator === '+') {
     return operand1 + operand2;
   }
   else if (operator === '-') {
     return operand1 - operand2;
   }
   else if (operator === 'x') {
     return operand1 * operand2;
   }
   else if (operator === '/') {
     return operand1 / operand2;
   }
  },
  render() {
    return <div id="calculator">
        <div id="screen-container">
          <input
          onChange = {this.handleChange}
          id="screen"
          value={this.state.equation}
           />
        </div>

        <div id="button-container">
          <div className="buttons">
            <span onClick={this.handleClear}className="operator" id="cancel">C</span>
            <span onClick={this.handleBtn} className="operator">/</span>
            <span onClick={this.handleBtn} className="operator">x</span>
            <span onClick={this.handleBtn}>7</span>
            <span onClick={this.handleBtn}>8</span>
            <span onClick={this.handleBtn}>9</span>
            <span onClick={this.handleBtn} className="operator">-</span>
            <span onClick={this.handleBtn} >4</span>
            <span onClick={this.handleBtn} >5</span>
            <span onClick={this.handleBtn} >6</span>
            <span onClick={this.handleBtn} className="operator">+</span>
            <span onClick={this.handleBtn} >1</span>
            <span onClick={this.handleBtn} >2</span>
            <span onClick={this.handleBtn} >3</span>
            <span onClick={this.eval} className="operator" id="calc">=</span>
            <div className="l-row">
              <span onClick={this.handleBtn} id="zero">0</span>
            </div>
          </div>
        </div>
      </div>;
  }
});

export default App;
