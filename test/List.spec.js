import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import List from '../src/List';
import * as utils from '../src/utils/';

describe('List', () => {
  test('should render a List', () => {
    const component = ReactTestRenderer.create(<List theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a ul tag', () => {
    const component = ReactTestRenderer.create(<List theme={theme} />).toJSON();
    expect(component.type).toEqual('ul');
  });

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <List
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <List
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
