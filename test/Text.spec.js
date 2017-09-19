import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Text from '../src/Text';
import * as utils from '../src/utils/';

const theme = getTheme({
  font: {
    size: '16px',
    weight: 200,
    lineHeight: '18px',
    family: 'Roboto, sans-serif',
  },
});

describe('Text', () => {
  test('should render a Text', () => {
    const component = ReactTestRenderer.create(<Text theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a p tag', () => {
    const component = ReactTestRenderer.create(<Text theme={theme} />).toJSON();
    expect(component.type).toEqual('p');
  });

  test('should be bold', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        bold
      />,
    );
    expect(component).toHaveStyleRule('font-weight', 'bold');
  });

  test('should have a default font-weight', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '200');
  });

  test('should get font-family from theme', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        bold
      />,
    );
    expect(component).toHaveStyleRule('font-family', 'Roboto,sans-serif');
  });

  test('should have the given size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        size={10}
      />,
    );
    expect(component).toHaveStyleRule('font-size', '10px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a default font-size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('font-size', '16px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the given line-height', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        lineHeight={10}
      />,
    );
    expect(component).toHaveStyleRule('line-height', '10px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a default line-height', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('line-height', '18px');
    expect(spy).toHaveBeenCalled();
  });

  test('should be uppercase', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        caps
      />,
    );
    expect(component).toHaveStyleRule('text-transform', 'uppercase');
    expect(component).toHaveStyleRule('letter-spacing', '.2em');
  });

  test('should be aligned left', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        left
      />,
    );
    expect(component).toHaveStyleRule('text-align', 'left');
  });

  test('should be aligned right', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        right
      />,
    );
    expect(component).toHaveStyleRule('text-align', 'right');
  });

  test('should be aligned center', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        center
      />,
    );
    expect(component).toHaveStyleRule('text-align', 'center');
  });

  test('should be justified', () => {
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        justify
      />,
    );
    expect(component).toHaveStyleRule('text-align', 'justify');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Text
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
