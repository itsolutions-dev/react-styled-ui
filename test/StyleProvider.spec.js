import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import StyleProvider from '../src/StyleProvider';
import theme from '../src/theme';

describe('StyleProvider', () => {
  test('should provide color', () => {
    const component = ReactTestRenderer.create(<StyleProvider theme={theme} />);
    expect(component).toHaveStyleRule('color', 'white');
  });

  test('should provide font family', () => {
    const component = ReactTestRenderer.create(<StyleProvider theme={theme} />);
    expect(component).toHaveStyleRule('font-family', 'Roboto, sans-serif');
  });

  test('should inject font inherits for inputs', () => {
    expect(
      `
        input, textarea, select {
          font-family: inherit;
        }
      `,
    ).toBeAGlobalStyle();
  });
});
