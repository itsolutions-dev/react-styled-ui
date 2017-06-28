import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import styled from 'styled-components';
import ThemeProvider from '../src/ThemeProvider';
import StyleProvider from '../src/StyleProvider';
import theme from '../src/theme';

describe('ThemeProvider', () => {
  it('should provide a default theme', () => {
    const Button = styled.button`${props => expect(props.theme).toMatch({
      palette: {},
    })}`;
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider>
        <Button />
      </ThemeProvider>,
    );
  });

  it('should provide a merged theme', () => {
    const Button = styled.button`${props => expect(props.theme).toMatch({
      foo: 'bar',
      palette: {},
    })}`;
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={{ foo: 'bar' }}>
        <Button />
      </ThemeProvider>,
    );
  });

  it('should provide a StyleProvider', () => {
    const styleProvider = ReactTestRenderer.create(
      <ThemeProvider theme={theme}>
        <span />
      </ThemeProvider>,
    ).toJSON();
    const expected = ReactTestRenderer.create(
      <StyleProvider theme={theme}>
        <span />
      </StyleProvider>,
    ).toJSON();
    expect(styleProvider).toMatch(expected);
  });
});
