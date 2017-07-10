import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Select from '../src/Select';
import * as utils from '../src/utils/';

describe('Select', () => {
  test('should render a Select', () => {
    const component = ReactTestRenderer.create(<Select theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a select tag', () => {
    const component = ReactTestRenderer.create(<Select theme={theme} />).toJSON();
    expect(component.type).toEqual('select');
  });

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Select
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a border', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(
      <Select
        theme={theme}
        borderColor="white"
      />,
    );
    expect(component).toHaveStyleRule('border', '1px solid white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Select
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have opacity', () => {
    const spy = jest.spyOn(utils, 'getOpacity');
    const component = ReactTestRenderer.create(
      <Select
        theme={theme}
        opacity={0.75}
      />,
    );
    expect(component).toHaveStyleRule('opacity', '0.75');
    expect(spy).toHaveBeenCalled();
  });
});
