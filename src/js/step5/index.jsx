import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Container from './components/Container';
import Square from './components/Square';

const App = () => {
  return (
    <Container>
      <Square />
    </Container>
  );
};

hot(module)(App);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
