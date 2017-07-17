import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Progress from '../src/Progress';
import * as utils from '../src/utils/';

const theme = getTheme({
  radius: '7px',
});

describe('Progress', () => {
  test('should render a Progress', () => {
    const component = ReactTestRenderer.create(<Progress theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a progress tag', () => {
    const component = ReactTestRenderer.create(<Progress theme={theme} />).toJSON();
    expect(component.type).toEqual('progress');
  });

  test('should have a radius', () => {
    const component = ReactTestRenderer.create(
      <Progress
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '7px');
  });

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Progress
        theme={theme}
        backgroundColor="white"
        textColor="black"
      />,
    );
    expect({
      component,
      modifier: '&::-webkit-progress-bar',
    }).toHaveStyleRule('background-color', 'white');
    expect({
      component,
      modifier: '&::-webkit-progress-value',
    }).toHaveStyleRule('background-color', 'black');
    expect({
      component,
      modifier: '&::-moz-progress-bar',
    }).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
