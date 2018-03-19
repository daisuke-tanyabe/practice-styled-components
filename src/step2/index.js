import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Component = () => {
  return (
    <div>
      <Input placeholder="@mxstbr" type="text" />
      <Input value="@geelen" type="text" />
    </div>
  );
};

hot(module)(Component);

ReactDOM.render(
  <Component />,
  document.getElementById('app')
);
