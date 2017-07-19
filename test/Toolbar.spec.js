import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Toolbar from '../src/Toolbar';
import * as utils from '../src/utils/';

describe('Toolbar', () => {
  test('should render a Toolbar', () => {
    const component = ReactTestRenderer.create(<Toolbar theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Toolbar theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a background', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Toolbar
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a border', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(
      <Toolbar
        theme={theme}
        borderColor="white"
      />,
    );
    expect(component).toHaveStyleRule('border', '1px solid white');
    expect(spy).toHaveBeenCalled();
  });
});
