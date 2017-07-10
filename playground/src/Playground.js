// @flow

import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import ThemeProvider from '../../src/ThemeProvider';
import theme from '../../src/theme';

const getCode = code => `
  <ThemeProvider theme={theme}>
    ${code}
  </ThemeProvider>
`.trim().replace(/^/, '\t');

type PlaygroundProps = {
  code: string,
  scope: Object
};

export default ({ code, scope, ...others }: PlaygroundProps) =>
  (<LiveProvider
    code={getCode(code)}
    scope={{
      ThemeProvider,
      theme,
      ...scope,
    }}
    {...others}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>);
