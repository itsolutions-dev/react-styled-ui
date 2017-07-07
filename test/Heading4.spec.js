import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading4 from '../src/Heading4';

describe('Heading4', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Heading4 />);
    expect(component).toBeDefined();
  });

  test('should have a h4 tag', () => {
    expect(Heading4).toHaveComponent('h4');
  });
});
