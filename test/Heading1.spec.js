import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading1 from '../src/Heading1';

describe('Heading1', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Heading1 />);
    expect(component).toBeDefined();
  });

  test('should have a h1 tag', () => {
    expect(Heading1).toHaveComponent('h1');
  });
});
