import React from 'react';
import styled from 'styled-components';
import Playground from './Playground';
import * as components from '../../src/';
import ThemeProvider from '../../src/ThemeProvider';

const Body = styled.div`
  background-color: #C0C0C0;
`;

const filePathToComponentName = file =>
  file.replace(/\.\/(examples\/)?/, '').replace(/\.example$/, '');

const getExamples = () => {
  const req = require.context('./examples', true, /\.example$/);
  return req.keys().map(file => ({
    name: filePathToComponentName(file),
    code: req(file),
  }));
};

export default () => (
  <ThemeProvider>
    <Body>
      <h1>Playground</h1>
      {
        getExamples().map(x => (
          <Playground
            code={x.code}
            scope={{
              [x.name]: components[x.name],
            }}
            collapsableCode
          />
        ))
      }
    </Body>
  </ThemeProvider>
);
