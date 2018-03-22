import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Square = styled.div`
animation: ${ rotate360 } 2s linear infinite;
background: #333333;
height: 100px;
width: 100px;
`;

export default Square;
