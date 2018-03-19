import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const Component = () => {
  return (
    <div>Step1 Test</div>
  );
};

hot(module)(Component);

ReactDOM.render(
  <Component />,
  document.getElementById('app')
);
