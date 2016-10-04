import React from 'react';
import Form from './Form';
import Header from './Header';

const App = React.createClass({
  getInitialState: function(){
    return {
      val: "",
      checkboxVal: false,
      radioVal: false
    }
  },
  update: function(text,checkboxVal,radioVal){
    this.setState({
      val: text,
      checkboxVal: checkboxVal,
      radioVal: radioVal
    })
  },
  renderNiceHeader: function(){
  return (
      <div>
        <Header>Yeah!</Header>
        <h1>Form Values</h1>
        <ul>
          <li>Input: {this.state.val}</li>
          <li>Checkbox: {this.state.checkboxVal.toString()}</li>
          <li>Radio: {this.state.radioVal.toString()}</li>
        </ul>
        <Form onCustomSubmit={this.update}/>
      </div>
      )
  },    renderMeanHeader: function(){
      return (
        <div>
          <Header>Boo!</Header>
          <h1>Form Values</h1>
          <ul>
            <li>Input: {this.state.val}</li>
            <li>Checkbox: {this.state.checkboxVal.toString()}</li>
            <li>Radio: {this.state.radioVal.toString()}</li>
          </ul>
          <Form onCustomSubmit={this.update}/>
        </div>
        )
    },
  render: function() {
    if(this.state.checkboxVal){
      return this.renderNiceHeader()
    } else {
      return this.renderMeanHeader()
    }
  }
});

export default App;
