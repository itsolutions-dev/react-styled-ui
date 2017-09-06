import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Panel from '../src/Panel';

describe('Panel', () => {
  test('should render a Panel', () => {
    const component = ReactTestRenderer.create(<Panel theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Panel theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });
});
