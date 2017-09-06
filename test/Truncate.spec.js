import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Truncate from '../src/Truncate';

describe('Truncate', () => {
  test('should render a Truncate', () => {
    const component = ReactTestRenderer.create(<Truncate theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a p tag', () => {
    const component = ReactTestRenderer.create(<Truncate theme={theme} />).toJSON();
    expect(component.type).toEqual('p');
  });

  test('should have correct styles', () => {
    const component = ReactTestRenderer.create(<Truncate theme={theme} />);
    expect(component).toHaveStyleRule('overflow', 'hidden');
    expect(component).toHaveStyleRule('white-space', 'nowrap');
    expect(component).toHaveStyleRule('text-overflow', 'ellipsis');
  });
});
