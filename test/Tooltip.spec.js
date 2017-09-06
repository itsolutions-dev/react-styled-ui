import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Tooltip from '../src/Tooltip';

const theme = getTheme({
  radius: '7px',
});

describe('Tooltip', () => {
  test('should render a Tooltip', () => {
    const component = ReactTestRenderer.create(<Tooltip theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Tooltip theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a border-radius', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('border-radius', '7px');
  });

  test('should have the provided text', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
        text="foo"
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('content', '"foo"');
  });

  test('should handle newlines in text', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
        text={
          `Hello
          World!`}
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('content', '"Hello\\A          World!"');
  });

  test('should have the provided background', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
        background="white"
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('background', 'white');
  });

  test('should have the provided color', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
        color="white"
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('color', 'white');
  });

  test('should have a default text', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('content', '""');
  });

  test('should have a default background', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('background', '#000');
  });

  test('should have a default color', () => {
    const component = ReactTestRenderer.create(
      <Tooltip
        theme={theme}
      />,
    );
    expect({
      component,
      modifier: '&::before',
    }).toHaveStyleRule('color', '#fff');
  });
});
