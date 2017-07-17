import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Truncate from '../src/Truncate';

describe('Truncate', () => {
  test('should render a Truncate', () => {
    const component = ReactTestRenderer.create(<Truncate />);
    expect(component).toBeDefined();
  });

  test('should have a p tag', () => {
    expect(Truncate).toHaveComponent('p');
  });

  test('should have correct styles', () => {
    const component = ReactTestRenderer.create(<Truncate />);
    expect(component).toHaveStyleRule('overflow', 'hidden');
    expect(component).toHaveStyleRule('white-space', 'nowrap');
    expect(component).toHaveStyleRule('text-overflow', 'ellipsis');
  });
});