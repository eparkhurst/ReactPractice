import React from 'react'

const TextField = React.createClass({
    getInitialState(){
      return {value: "I'm changable and stuff"}
    },
    handleChange(event){
      const nextVal = event.target.value

      this.setState({value:nextVal})
    },
    render(){
      return <div>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.value}
            />

            <input
              type="text"
              value="I'm read-only, am under React's control, but raise a warning."
            />

            <input
              defaultValue="I'm changeable but am not under React's control."
              type="text"
            />

            <input
              readOnly={true}
              type="text"
              value="I'm read-only and under React's control."
            />
          </div>;
    }
})

export default TextField
