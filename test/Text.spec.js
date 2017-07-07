import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Text from '../src/Text';

describe('Text', () => {
  test('should render a Text', () => {
    const component = ReactTestRenderer.create(<Text />);
    expect(component).toBeDefined();
  });

  test('should have a p tag', () => {
    expect(Text).toHaveComponent('p');
  });
});
