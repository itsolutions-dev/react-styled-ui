import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, textarea, select {
    font-family: inherit;
  }
`;

const FontStyleProvider = styled.div`
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.palette.defaultText};
`;

const StyleProvider = props => (
  <React.Fragment>
    <GlobalStyle />
    <FontStyleProvider {...props} />
  </React.Fragment>
);

export default StyleProvider;
