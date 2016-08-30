import React from 'react';

const App = React.createClass({
  getInitialState(){
    return {city:''}
  },

  handleChange(event){
    const nextState = {city:event.target.value}
    this.setState(nextState)
  },
  render() {
    let message
    let inner

    if(this.state.city.toLowerCase() === 'denver'){
      message = 'Go Broncos'
      inner = <div>
          <a href="http://www.denverbroncos.com/"><h2>{message}</h2></a>
          <img src="http://prod.static.broncos.clubs.nfl.com/nfl-assets/img/gbl-ico-team/DEN/logos/home/large.png"/>
        </div>
    }else if(this.state.city.trim()===''){
      message = 'Please enter a good city'
      inner = <h2>{message}</h2>
    }else{
      message = this.state.city + " ? Never Heard of it"
      inner = <h2>{message}</h2>
    }

    const element = <div>
      <h1>Whats your favorite city?</h1>
      <input
        onChange={this.handleChange}
        type='text'
        value={this.state.city}
       />
       {inner}
     </div>
    return element
  }
});

export default App;
