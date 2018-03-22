import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Container from './components/Container';
import StyledBar from './components/Bar';

const App = () => {
  return (
    <Container>
      <StyledBar>
        <h1>headline lv1</h1>
      </StyledBar>

      <StyledBar>
        <h2>headline lv2</h2>
      </StyledBar>

      <StyledBar>
        <h3>headline lv3</h3>
      </StyledBar>
    </Container>
  );
};

hot(module)(App);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
