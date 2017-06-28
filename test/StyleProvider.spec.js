import React from 'react';
import expect from 'expect';
import ReactTestRenderer from 'react-test-renderer';
import StyleProvider from '../src/StyleProvider';
import theme from '../src/theme';

describe('StyleProvider', () => {
  it('should provide color', () => {
    const component = ReactTestRenderer.create(<StyleProvider theme={theme} />);
    expect(component).toHaveStyleRule('color', 'white');
  });

  it('should provide font family', () => {
    const component = ReactTestRenderer.create(<StyleProvider theme={theme} />);
    expect(component).toHaveStyleRule('font-family', 'Roboto, sans-serif');
  });
});
