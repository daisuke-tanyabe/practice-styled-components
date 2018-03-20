import React from 'react';
import { Header, Container } from './components';

const App = ({ base }) => {
  base();
  return (
    <Container>
      <Header>Header</Header>
    </Container>
  );
};

export default App;
