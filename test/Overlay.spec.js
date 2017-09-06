import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Overlay from '../src/Overlay';

describe('Overlay', () => {
  test('should render an Overlay', () => {
    const component = ReactTestRenderer.create(<Overlay theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Overlay theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have correct styles', () => {
    const component = ReactTestRenderer.create(<Overlay theme={theme} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
