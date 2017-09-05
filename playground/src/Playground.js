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

export default class Playground extends React.Component {

  state = {};

  props: {
    code: string,
    scope: Object
  };

  render() {
    const { code, scope, ...others } = this.props;
    return (
      <LiveProvider
        code={getCode(code)}
        scope={{
          ThemeProvider,
          theme,
          state: this.state,
          // eslint-disable-next-line
          setState: this.setState.bind(this),
          ...scope,
        }}
        {...others}
      >
        <LiveEditor />
        <LiveError />
        <LivePreview
          style={{
            position: 'relative',
            minHeight: 100,
          }}
        />
      </LiveProvider>
    );
  }
}
