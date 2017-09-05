import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Absolute from '../src/Absolute';
import * as utils from '../src/utils/';

describe('Absolute', () => {
  test('should render a Absolute', () => {
    const component = ReactTestRenderer.create(<Absolute theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Absolute theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have absolute position', () => {
    const component = ReactTestRenderer.create(<Absolute theme={theme} />);
    expect(component).toHaveStyleRule('position', 'absolute');
  });

  test('should handle top prop', () => {
    let component = ReactTestRenderer.create(<Absolute theme={theme} top />);
    expect(component).toHaveStyleRule('top', '0');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Absolute theme={theme} top={20} />);
    expect(component).toHaveStyleRule('top', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle bottom prop', () => {
    let component = ReactTestRenderer.create(<Absolute theme={theme} bottom />);
    expect(component).toHaveStyleRule('bottom', '0');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Absolute theme={theme} bottom={20} />);
    expect(component).toHaveStyleRule('bottom', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle left prop', () => {
    let component = ReactTestRenderer.create(<Absolute theme={theme} left />);
    expect(component).toHaveStyleRule('left', '0');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Absolute theme={theme} left={20} />);
    expect(component).toHaveStyleRule('left', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle right prop', () => {
    let component = ReactTestRenderer.create(<Absolute theme={theme} right />);
    expect(component).toHaveStyleRule('right', '0');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Absolute theme={theme} right={20} />);
    expect(component).toHaveStyleRule('right', '20px');
    expect(spy).toHaveBeenCalled();
  });
});
