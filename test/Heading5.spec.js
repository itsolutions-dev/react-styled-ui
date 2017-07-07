import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading5 from '../src/Heading5';

describe('Heading5', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Heading5 />);
    expect(component).toBeDefined();
  });

  test('should have a h5 tag', () => {
    expect(Heading5).toHaveComponent('h5');
  });
});
