import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { base } from './styles';
import constant from './constant';
import Container from './components/Container';
import Header from './components/Header';
import ButtonGroup from './components/ButtonGroup';

const App = ({ constant }) => {
  base();
  return (
    <Container constant={constant}>
      <Header constant={constant}>Header</Header>
      <ButtonGroup constant={constant} />
    </Container>
  );
};

hot(module)(App);

ReactDOM.render(
  <App constant={constant} />,
  document.getElementById('app')
);
