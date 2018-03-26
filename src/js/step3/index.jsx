import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { hot } from 'react-hot-loader';

import styles from './styles';
import variables from './variables';
import Container from './components/Container';
import Input from './components/Input';

const App = ({ variables }) => {
  styles();
  return (
    <Container>
      <Input
        placeholder="id"
        type="input"
        fontColor={variables.COLOR.RED}
        fontSize={variables.FONT_SIZE.BASE}
      />
      <Input
        placeholder="password"
        type="password"
        fontSize={variables.FONT_SIZE.LARGE}
      />
    </Container>
  );
};

App.propTypes = {
  variables: PropTypes.shape({
    COLOR: PropTypes.object.isRequired,
    FONT_SIZE: PropTypes.object.isRequired
  }).isRequired
};

hot(module)(App);

ReactDOM.render(
  <App variables={variables} />,
  document.getElementById('app')
);
