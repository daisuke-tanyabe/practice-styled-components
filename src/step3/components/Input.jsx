import styled from 'styled-components';

const Input = styled.input.attrs({
type: props => props.type,
fontColor: props => props.fontColor,
fontSize: props => props.fontSize
})`
font-size: ${props => props.fontSize};
border: 1px solid #333;
margin: 1em;
padding: 1em;

::-webkit-input-placeholder {
color: ${props => props.fontColor};
}
`;

export default Input;
