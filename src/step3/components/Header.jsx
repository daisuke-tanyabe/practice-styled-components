import styled from 'styled-components';

const Container = styled.div`
background: #333333;
color: #fff;
font-size: ${({constant}) => constant.FONT_SIZE.SMALL}px;
padding: 20px 0;
text-align: center;

&:hover {
  background: #999;
}
`;

export default Container;
