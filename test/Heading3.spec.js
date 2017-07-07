import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading3 from '../src/Heading3';

describe('Heading3', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Heading3 />);
    expect(component).toBeDefined();
  });

  test('should have a h3 tag', () => {
    expect(Heading3).toHaveComponent('h3');
  });
});
