import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

const Component = () => {
  return (
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  );
};

hot(module)(Component);

ReactDOM.render(
  <Component />,
  document.getElementById('app')
);
