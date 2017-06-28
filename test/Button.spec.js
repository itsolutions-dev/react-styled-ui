import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import Button from '../src/Button';
import './testUtils/toHaveStyleRule';

describe('Button', () => {
  test('should render a Button', () => {
    const rendered = ReactTestUtils.renderIntoDocument(<Button />);
    const component = ReactTestUtils.findRenderedDOMComponentWithTag(
      rendered,
      'button',
    );
    expect(component).toBeDefined();
  });

  test('should have a color', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect(component).toHaveStyleRule('color', 'blue');
  });

  test('should have a color hover', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect({
      component,
      modifier: ':hover',
    }).toHaveStyleRule('color', 'white');
  });
});
