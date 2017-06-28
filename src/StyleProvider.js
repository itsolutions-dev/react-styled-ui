import styled, { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  input, textarea, select {
    font-family: inherit;
  }
`;

const StyleProvider = styled.div`
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.palette.defaultText};
`;

export default StyleProvider;
