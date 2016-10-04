import React from 'react';

const Track = React.createClass({
  handleClick(){
    this.props.incrementLikes(this.props.track)
  },
  render(){
    return <div>
      <h5>{this.props.track.title} - {this.props.track.artist}</h5>
      <p>{this.props.track.likes}</p>
      <button onClick = {this.handleClick}>Like</button>
    </div>
  }
})

export default Track;
