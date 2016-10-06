import React, {Component} from 'react';
import {Link} from 'react-router'

class Thing extends Component{
  render(){
    let link
    if(this.props.link === '/'){
      link = 'First'
    }else{
      link = this.props.link
    }
    return <div>
        <h5>Common Thing</h5>
        <Link to={this.props.link}>{link}</Link>
      </div>
  }
}

export default Thing
