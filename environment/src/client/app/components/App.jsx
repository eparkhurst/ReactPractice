import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import Liker from './Liker.jsx';
import Other from './Other.jsx';

class App extends React.Component {
  render () {
    return (<Router history={browserHistory}>
        <Route path='/' component={Liker} />
        <Route path='other' component={Other} />
      </Router>
    )
  }
}

export default App;

Math.floor(Math.random()*72)
