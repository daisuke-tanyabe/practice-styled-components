import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: #333;
color: #fff;
font-size: ${({constant}) => constant.FONT_SIZE.LARGE}px;
margin: 1em;
padding: .5em 1em;
border: 2px solid ${({constant}) => constant.COLOR.PAPAYAWHIP};

&:hover {
background: #777;
}
`;

const AlertButton = Button.extend`
background: #ff1d49;

&:hover {
background: #ff6e87;
}
`;

const ButtonGroup = ({ constant }) => {
  return (
    <div>
      <Button constant={constant}>Base Button</Button>
      <AlertButton constant={constant}>Alert Button</AlertButton>
    </div>
  );
};

export default ButtonGroup;
