import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import styled from 'styled-components';
import ThemeProvider from '../src/ThemeProvider';

describe('ThemeProvider', () => {
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
});
