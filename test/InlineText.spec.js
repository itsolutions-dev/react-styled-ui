import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import InlineText from '../src/InlineText';
import * as utils from '../src/utils/';

describe('InlineText', () => {
  test('should render a InlineText', () => {
    const component = ReactTestRenderer.create(<InlineText theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a span tag', () => {
    const component = ReactTestRenderer.create(<InlineText theme={theme} />).toJSON();
    expect(component.type).toEqual('span');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <InlineText
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
      <InlineText
        theme={theme}
        opacity={0.75}
      />,
    );
    expect(component).toHaveStyleRule('opacity', '0.75');
    expect(spy).toHaveBeenCalled();
  });

  test('should be important', () => {
    const component = ReactTestRenderer.create(
      <InlineText
        theme={theme}
        important
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '800');
  });

  test('should not be important', () => {
    const component = ReactTestRenderer.create(
      <InlineText
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '400');
  });
});
