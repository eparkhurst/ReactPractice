import React from 'react';

const Header = React.createClass({
  render(){
    return <div>
      <h1>{this.props.children}</h1>
    </div>
  }
})

export default Header;
