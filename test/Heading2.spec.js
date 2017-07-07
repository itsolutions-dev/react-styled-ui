import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading2 from '../src/Heading2';

describe('Heading2', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Heading2 />);
    expect(component).toBeDefined();
  });

  test('should have a h2 tag', () => {
    expect(Heading2).toHaveComponent('h2');
  });
});
