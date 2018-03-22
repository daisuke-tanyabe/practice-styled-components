import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { base } from './styles';
import Container from './components/Container';
import Button from './components/Button';
import AlertButton from './components/AlertButton';

const App = () => {
  base();
  return (
    <Container>
      <Button>Button</Button>
      <AlertButton>AlertButton</AlertButton>
    </Container>
  );
};

hot(module)(App);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
