import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Container from './components/Container';
import Header from './components/Header';

const App = () => (
  <Container>
    <Header>Header</Header>
  </Container>
);

hot(module)(App);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
