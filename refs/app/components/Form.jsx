import React from 'react';
import ReactDOM from 'react-dom';

const Form = React.createClass({
  captureValue:function(e){
    e.preventDefault();
    var inputText = ReactDOM.findDOMNode(this.refs.text).value
    var checkboxValue = ReactDOM.findDOMNode(this.refs.checkbox).checked
    var radioValue = ReactDOM.findDOMNode(this.refs.radio).checked
    this.props.onCustomSubmit(inputText,checkboxValue,radioValue)
  },
  render(){
    return <div>
      <form onSubmit={this.captureValue}>
        <input type="text" ref="text"/>
        <input type="checkbox" ref="checkbox" />
        <input type="radio" ref="radio" />
        <input type="submit" value="Change things!" />
      </form>
    </div>
  }
})

export default Form
