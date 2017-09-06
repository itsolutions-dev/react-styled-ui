import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Heading1 from '../src/Heading1';
import * as utils from '../src/utils/';

const theme = getTheme({
  h1: {
    fontSize: '29px',
    fontWeight: 900,
    lineHeight: 450,
  },
});

describe('Heading1', () => {
  test('should render an Heading1', () => {
    const component = ReactTestRenderer.create(<Heading1 theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an h1 tag', () => {
    const component = ReactTestRenderer.create(<Heading1 theme={theme} />).toJSON();
    expect(component.type).toEqual('h1');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Heading1
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('color', '#FFFFFF');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a font-size', () => {
    const component = ReactTestRenderer.create(
      <Heading1
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-size', '29px');
  });

  test('should have a font-weight', () => {
    const component = ReactTestRenderer.create(
      <Heading1
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '900');
  });

  test('should have a line-height', () => {
    const component = ReactTestRenderer.create(
      <Heading1
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('line-height', '450');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Heading1
        theme={theme}
        textColor="#FFFFFF"
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
