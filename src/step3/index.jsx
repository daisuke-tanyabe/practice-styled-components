import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { base } from './styles';
import constant from './constant';
import Container from './components/Container';
import Header from './components/Header';

const App = ({ constant }) => {
  base();
  return (
    <Container constant={constant}>
      <Header constant={constant}>Header</Header>
    </Container>
  );
};

hot(module)(App);

ReactDOM.render(
  <App constant={constant} />,
  document.getElementById('app')
);
