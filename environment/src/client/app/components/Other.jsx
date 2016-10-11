import React from 'react';
import {Link} from 'react-router'

class Other extends React.Component{
  render(){
    return <div>
      <h1>This is from Other</h1>
      <Link to='/' >Home</Link>
    </div>
  }
}

export default Other;
