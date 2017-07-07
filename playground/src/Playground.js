// @flow

import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import ThemeProvider from '../../src/ThemeProvider';

const getCode = code => `
  <ThemeProvider>
    ${code}
  </ThemeProvider>
`;

type PlaygroundProps = {
  code: string,
  scope: Object
};

export default ({ code, scope, ...others }: PlaygroundProps) =>
  (<LiveProvider
    code={getCode(code)}
    scope={{
      ThemeProvider,
      ...scope,
    }}
    {...others}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>);