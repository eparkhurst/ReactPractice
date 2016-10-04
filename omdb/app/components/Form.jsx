import React from 'react';
import Movie from './Movie'

const Form = React.createClass({
  getInitialState(){
    return {
      submission:'',
      movie:{
        title:'',
        year:'',
        url:''
      }
    }
  },
  handleChange(event){
    const newSubmission = event.target.value;
    this.setState({submission:newSubmission})
  },
  handleClick(){
    $.get(" http://omdbapi.com?t="+this.state.submission, function (result) {
      console.log(result);
      const newState = {
        submission:'',
        movie:{
          title:result.Title,
          year:result.Year,
          url:result.Poster
        }
      }
      this.setState(newState)
    }.bind(this))
  },
  render(){
    return <div>
      <input onChange={this.handleChange} type = 'text' />
      <button onClick = {this.handleClick} >Submit</button>
      <Movie
        movie = {this.state.movie}
      />
    </div>

  }
})

export default Form;
