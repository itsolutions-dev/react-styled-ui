import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Link from '../src/Link';
import * as utils from '../src/utils/';

describe('Link', () => {
  test('should render a Link', () => {
    const component = ReactTestRenderer.create(<Link theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an a tag', () => {
    const component = ReactTestRenderer.create(<Link theme={theme} />).toJSON();
    expect(component.type).toEqual('a');
  });

  test('can be transparent', () => {
    const component = ReactTestRenderer.create(<Link theme={theme} transparent />);
    expect(component).toHaveStyleRule('background-color', 'transparent');
    expect({
      component,
      modifier: '&:hover',
    }).toHaveStyleRule('background-color', 'transparent');
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

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Link
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a background-color hover', () => {
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
    }).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
