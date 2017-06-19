import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../src/Button';

describe('Button', () => {
  it('should render a Button', () => {
    const rendered = ReactTestUtils.renderIntoDocument(<Button />);
    const component = ReactTestUtils.findRenderedDOMComponentWithTag(
      rendered,
      'button',
    );
    expect(component).toExist();
  });
});
