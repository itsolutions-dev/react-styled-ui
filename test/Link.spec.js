import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Link from '../src/Link';
import * as utils from '../src/utils/';

const theme = getTheme({
  font: {
    size: '16px',
  },
});

describe('Link', () => {
  test('should render a Link', () => {
    const component = ReactTestRenderer.create(<Link theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an a tag', () => {
    const component = ReactTestRenderer.create(<Link theme={theme} />).toJSON();
    expect(component.type).toEqual('a');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Link
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
      <Link
        theme={theme}
        opacity={0.75}
      />,
    );
    expect(component).toHaveStyleRule('opacity', '0.75');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color hover', () => {
    const spy = jest.spyOn(utils, 'getHover');
    const component = ReactTestRenderer.create(
      <Link
        theme={theme}
        hoverColor="white"
      />,
    );
    expect({
      component,
      modifier: '&:hover',
    }).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the correct font size', () => {
    const component = ReactTestRenderer.create(
      <Link
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('font-size', '16px');
  });
});
