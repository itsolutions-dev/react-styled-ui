import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import styled from 'styled-components';
import ThemeProvider from '../src/ThemeProvider';
import StyleProvider from '../src/StyleProvider';
import theme from '../src/theme';

describe('ThemeProvider', () => {
  test('should provide a default theme', () => {
    const Button = styled.button`${props => expect(props.theme).toEqual(theme)}`;
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider>
        <Button />
      </ThemeProvider>,
    );
  });

  test('should provide a merged theme', () => {
    const Button = styled.button`${props => expect(props.theme).toEqual({
      foo: 'bar',
      ...theme,
    })}`;
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={{ foo: 'bar' }}>
        <Button />
      </ThemeProvider>,
    );
  });

  test('should provide a StyleProvider', () => {
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
    expect(styleProvider).toEqual(expected);
  });
});
