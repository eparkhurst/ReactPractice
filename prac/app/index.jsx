import App from './components/App';
import Other from './components/Other';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  <Other/>,
  document.getElementById('otherApp')
);
