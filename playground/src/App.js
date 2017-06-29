import React from 'react';
import styled from 'styled-components';
import Playground from './Playground';
import Link from '../../src/Link';
import ThemeProvider from '../../src/ThemeProvider';
import linkExample from './examples/Link.example';

const Body = styled.div`
  background-color: #C0C0C0;
`;

export default () => (
  <ThemeProvider>
    <Body>
      <h1>Playground</h1>
      <Playground
        code={linkExample}
        scope={{
          Link,
        }}
        collapsableCode
      />
    </Body>
  </ThemeProvider>
);
