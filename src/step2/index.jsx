import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import base from './base';
import App from './container/App';

hot(module)(App);

ReactDOM.render(
  <App base={base} />,
  document.getElementById('app')
);
