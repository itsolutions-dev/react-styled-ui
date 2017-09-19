import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import DotButton from '../src/DotButton';
import * as utils from '../src/utils/';

describe('DotButton', () => {
  test('should render a DotButton', () => {
    const component = ReactTestRenderer.create(<DotButton theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a button tag', () => {
    const component = ReactTestRenderer.create(<DotButton theme={theme} />).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should be active', () => {
    const component = ReactTestRenderer.create(
      <DotButton
        active
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'currentColor');
  });

  test('should not be active', () => {
    const component = ReactTestRenderer.create(
      <DotButton
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'rgba(0,0,0,0.25)');
  });

  test('should have a default size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <DotButton
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('width', '16px');
    expect(component).toHaveStyleRule('height', '16px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the given size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <DotButton
        size={20}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('width', '20px');
    expect(component).toHaveStyleRule('height', '20px');
    expect(spy).toHaveBeenCalled();
  });
});
