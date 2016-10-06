import React, {Component} from 'react';
import Thing from './Thing'

class Second extends Component{
  render(){
    return <div>
      <h1>This is the Second Page</h1>
      <Thing
        link = '/'
       />
    </div>
  }
}

export default Second
