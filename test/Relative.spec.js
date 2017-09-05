import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Relative from '../src/Relative';

describe('Relative', () => {
  test('should render a Relative', () => {
    const component = ReactTestRenderer.create(<Relative theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Relative theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have relative position', () => {
    const component = ReactTestRenderer.create(<Relative theme={theme} />);
    expect(component).toHaveStyleRule('position', 'relative');
  });
});
