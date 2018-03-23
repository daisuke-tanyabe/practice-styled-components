import Button from './Button';

const AlertButton = Button.extend`
  background: #ff3a5c;
  color: #fff;
  font-size: 16px;
  margin: 1em;
  padding: .5em 1em;
  
  &:hover {
    background: #ff7c8b;
  }
`;

export default AlertButton;
