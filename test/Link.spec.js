import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import theme from '../src/theme';
import Link from '../src/Link';

describe('Link', () => {
  test('should render a Link', () => {
    const rendered = ReactTestUtils.renderIntoDocument(<Link theme={theme} />);
    const component = ReactTestUtils.findRenderedDOMComponentWithTag(
      rendered,
      'a',
    );
    expect(component).toBeDefined();
  });
});
