import React from 'react';
import styled from 'styled-components';
import Playground from './Playground';
import * as components from '../../src/';
import ThemeProvider from '../../src/ThemeProvider';

const { Heading } = components;

const Body = styled.div`
  background: #FFFFFF;
`;

const filePathToComponentName = file =>
  file.replace(/\.\/(examples\/)?/, '').replace(/\.example$/, '');

const getExamples = () => {
  const req = require.context('./examples', true, /\.example$/);
  return req.keys().map((file) => {
    const code = req(file);
    const scope = [];

    let match;
    const componentNameRegex = /<([A-Z]\w*)[\s|>]/g;
    // eslint-disable-next-line
    while ((match = componentNameRegex.exec(code)) !== null) {
      scope.push({
        name: match[1],
        component: components[match[1]],
      });
    }

    return {
      name: filePathToComponentName(file),
      scope: scope.filter(x => x.component)
        .reduce((acc, cur) => ({
          ...acc,
          [cur.name]: cur.component,
        }), {}),
      code,
    };
  });
};

export default () => (
  <ThemeProvider>
    <Body>
      <Heading size={1}>Playground</Heading>
      {
        getExamples()
          // eslint-disable-next-line
          .sort((x, y) => x.name > y.name ? 1 : -1)
          .map(x => (
            <Playground
              key={x.name}
              code={x.code}
              scope={x.scope}
              collapsableCode
            />
          ))
      }
    </Body>
  </ThemeProvider>
);
