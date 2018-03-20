import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './container/App';

hot(module)(App);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
