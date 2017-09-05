import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Border from '../src/Border';
import * as utils from '../src/utils/';

const theme = getTheme({
  palette: {
    defaultBorder: '#bababa',
  },
});

describe('Border', () => {
  test('should render a Border', () => {
    const component = ReactTestRenderer.create(<Border theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should render a div tag', () => {
    const component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a border color', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-color', '#bababa');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a the given border color', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(<Border color="blue" theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-color', 'blue');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle border-top', () => {
    let component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-top-width', '0');
    component = ReactTestRenderer.create(<Border top theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-top-width', '1px');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Border top={20} theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-top-width', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle border-bottom', () => {
    let component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-bottom-width', '0');
    component = ReactTestRenderer.create(<Border bottom theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-bottom-width', '1px');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Border bottom={20} theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-bottom-width', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle border-left', () => {
    let component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-left-width', '0');
    component = ReactTestRenderer.create(<Border left theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-left-width', '1px');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Border left={20} theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-left-width', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should handle border-right', () => {
    let component = ReactTestRenderer.create(<Border theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-right-width', '0');
    component = ReactTestRenderer.create(<Border right theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-right-width', '1px');
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    component = ReactTestRenderer.create(<Border right={20} theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-right-width', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the given border-style', () => {
    const component = ReactTestRenderer.create(<Border borderStyle="dotted" theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('border-style', 'dotted');
  });
});
