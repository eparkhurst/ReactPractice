import React from 'react';
import GHProfile from './GitHubProfile'

const App = React.createClass({
  render() {
    return <div>
      <h1>From App</h1>
      <GHProfile
        name = 'eparkhurst'
      />
    </div>;
  }
});

export default App;
