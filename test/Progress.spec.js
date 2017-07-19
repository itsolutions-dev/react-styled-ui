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

  test('should have a background', () => {
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
    }).toHaveStyleRule('background', 'white');
    expect({
      component,
      modifier: '&::-webkit-progress-value',
    }).toHaveStyleRule('background', 'black');
    expect({
      component,
      modifier: '&::-moz-progress-bar',
    }).toHaveStyleRule('background', 'black');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the provided background', () => {
    const component = ReactTestRenderer.create(
      <Progress
        theme={theme}
        background="white"
      />,
    );
    expect({
      component,
      modifier: '&::-webkit-progress-bar',
    }).toHaveStyleRule('background', 'white');
  });

  test('should support color prop', () => {
    const component = ReactTestRenderer.create(
      <Progress
        theme={theme}
        color="white"
      />,
    );
    expect({
      component,
      modifier: '&::-webkit-progress-value',
    }).toHaveStyleRule('background', 'white');
    expect({
      component,
      modifier: '&::-moz-progress-bar',
    }).toHaveStyleRule('background', 'white');
  });
});
