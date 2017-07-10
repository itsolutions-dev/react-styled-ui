import React from 'react';
import styled from 'styled-components';
import Playground from './Playground';
import * as components from '../../src/';
import ThemeProvider from '../../src/ThemeProvider';

const { Heading } = components;

const Body = styled.div`
  background-color: #FFFFFF;
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
      <Heading size={1}>Playground</Heading>
      {
        getExamples().map(x => (
          <Playground
            key={x.name}
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
