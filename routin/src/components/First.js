import React, {Component} from 'react';
import Thing from './Thing'

class First extends Component{
  render(){
    return <div>
      <h1>This is the First Page</h1>
      <Thing
        link = 'second'
       />
    </div>
  }
}

export default First
