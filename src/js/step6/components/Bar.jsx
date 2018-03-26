import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = ({ className, children }) => (
  <div className={className}>
    { children }
  </div>
);

Bar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

const StyledBar = styled(Bar)`
  background: #3eacff;
  color: #fff;
`;


export default StyledBar;
