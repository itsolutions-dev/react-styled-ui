// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyleProvider from './StyleProvider';
import getTheme from './getTheme';

type ThemeProviderProps = {
  theme: Object,
  children: any
};

export default ({ theme = {}, children, ...others }: ThemeProviderProps) => (
  <ThemeProvider theme={getTheme(theme)} {...others}>
    <StyleProvider>
      {children}
    </StyleProvider>
  </ThemeProvider>
);
