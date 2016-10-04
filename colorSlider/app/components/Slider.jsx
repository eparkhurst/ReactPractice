import React from 'react'

const Slider  = React.createClass({
  handleChange(event){
    this.props.updateColors(this.props.color, event.target.value)
  },
  render(){
    return <div>
      <input onChange = {this.handleChange} type="range" min="0" max = "255"/>
    </div>
  }
})

export default Slider
