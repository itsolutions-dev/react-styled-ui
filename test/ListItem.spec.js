import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import ListItem from '../src/ListItem';
import * as utils from '../src/utils/';

describe('ListItem', () => {
  test('should render a ListItem', () => {
    const component = ReactTestRenderer.create(<ListItem theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a li tag', () => {
    const component = ReactTestRenderer.create(<ListItem theme={theme} />).toJSON();
    expect(component.type).toEqual('li');
  });

  test('should have a background', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <ListItem
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <ListItem
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
