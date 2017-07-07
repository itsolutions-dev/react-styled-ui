import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Button from '../src/Button';

describe('Button', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect(component).toBeDefined();
  });

  test('should have a button tag', () => {
    expect(Button).toHaveComponent('button');
  });

  test('should have a color', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect(component).toHaveStyleRule('color', 'blue');
  });

  test('should have a color hover', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect({
      component,
      modifier: '&:hover',
    }).toHaveStyleRule('color', 'white');
  });
});
