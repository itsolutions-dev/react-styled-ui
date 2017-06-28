import styled from 'styled-components';

const StyleProvider = styled.div`
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.palette.defaultText};
`;

export default StyleProvider;
