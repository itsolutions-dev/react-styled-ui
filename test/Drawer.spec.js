import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Drawer from '../src/Drawer';
import * as utils from '../src/utils/';

describe('Drawer', () => {
  test('should render a Drawer', () => {
    const component = ReactTestRenderer.create(<Drawer theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render a div', () => {
    const component = ReactTestRenderer.create(<Drawer theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a default size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    let component = ReactTestRenderer.create(<Drawer position="left" theme={theme} />);
    expect(component).toHaveStyleRule('width', '320px');
    expect(spy).toHaveBeenCalled();
    component = ReactTestRenderer.create(<Drawer position="right" theme={theme} />);
    expect(component).toHaveStyleRule('width', '320px');
    component = ReactTestRenderer.create(<Drawer position="top" theme={theme} />);
    expect(component).toHaveStyleRule('height', '320px');
    component = ReactTestRenderer.create(<Drawer position="bottom" theme={theme} />);
    expect(component).toHaveStyleRule('height', '320px');
  });

  test('should have the given size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    let component = ReactTestRenderer.create(
      <Drawer
        position="left"
        size={20}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('width', '20px');
    expect(spy).toHaveBeenCalled();
    component = ReactTestRenderer.create(
      <Drawer
        position="right"
        size={20}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('width', '20px');
    component = ReactTestRenderer.create(
      <Drawer
        position="top"
        size={20}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('height', '20px');
    component = ReactTestRenderer.create(
      <Drawer
        position="bottom"
        size={20}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('height', '20px');
  });

  test('should apply a transform based on position', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    let component = ReactTestRenderer.create(
      <Drawer
        position="left"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('transform', 'translateX(-100%)');
    expect(spy).toHaveBeenCalled();
    component = ReactTestRenderer.create(
      <Drawer
        position="right"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('transform', 'translateX(100%)');
    component = ReactTestRenderer.create(
      <Drawer
        position="top"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('transform', 'translateY(-100%)');
    component = ReactTestRenderer.create(
      <Drawer
        position="bottom"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('transform', 'translateY(100%)');
  });

  test('should have the correct position', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    let component = ReactTestRenderer.create(
      <Drawer
        position="left"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('bottom', '0');
    expect(component).toHaveStyleRule('top', '0');
    expect(spy).toHaveBeenCalled();
    component = ReactTestRenderer.create(
      <Drawer
        position="right"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('right', '0');
    expect(component).toHaveStyleRule('bottom', '0');
    expect(component).toHaveStyleRule('top', '0');
    component = ReactTestRenderer.create(
      <Drawer
        position="top"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('right', '0');
    expect(component).toHaveStyleRule('top', '0');
    component = ReactTestRenderer.create(
      <Drawer
        position="bottom"
        open={false}
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('right', '0');
    expect(component).toHaveStyleRule('bottom', '0');
  });

  test('should have be left by default', () => {
    const component = ReactTestRenderer.create(
      <Drawer
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('bottom', '0');
    expect(component).toHaveStyleRule('top', '0');
  });

  test('should be open', () => {
    const component = ReactTestRenderer.create(
      <Drawer
        open
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('transform', 'none');
  });
});
