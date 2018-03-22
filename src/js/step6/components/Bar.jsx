import React from 'react';
import styled from 'styled-components';

const Bar = ({ className, children }) => {
  return (
    <div className={className}>
      { children }
    </div>
  )
};

const StyledBar = styled(Bar)`
background: #3eacff;
color: #fff;
`;


export default StyledBar;
