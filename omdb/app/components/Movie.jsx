import React from 'react'

const Movie = React.createClass({
  render: function(){
    return <div className = 'movieContainer'>
      <h4>{this.props.movie.title} {this.props.movie.year}</h4>
      <img src={this.props.movie.url} />
    </div>
  }
})

export default Movie;
