import React from 'react';

const GHProfile = React.createClass({
  getInitialState: function(){
    return{
      userName:this.props.name,
      url:''
    }
  },
  componentDidMount: function(){
    const userName = this.state.userName
    this.serverRequest = $.get(" http://api.github.com/users/"+this.props.name, function (result) {
      console.log(result);
      const newState = {
        userName:userName,
        url:result.avatar_url
      }
      this.setState(newState)
    }.bind(this));
  },
  render(){
    return <div>
      <h2>{this.state.userName}</h2>
      <img className='profileImg' src={this.state.url}/>
    </div>

  }
})

export default GHProfile;
