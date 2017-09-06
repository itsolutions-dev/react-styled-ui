import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Heading3 from '../src/Heading3';
import * as utils from '../src/utils/';

const theme = getTheme({
  h3: {
    fontSize: '29px',
    fontWeight: 900,
    lineHeight: 450,
  },
});

describe('Heading3', () => {
  test('should render an Heading3', () => {
    const component = ReactTestRenderer.create(<Heading3 theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an h3 tag', () => {
    const component = ReactTestRenderer.create(<Heading3 theme={theme} />).toJSON();
    expect(component.type).toEqual('h3');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Heading3
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('color', 'rgba(255,255,255,0.54)');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a font-size', () => {
    const component = ReactTestRenderer.create(
      <Heading3
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-size', '29px');
  });

  test('should have a font-weight', () => {
    const component = ReactTestRenderer.create(
      <Heading3
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '900');
  });

  test('should have a line-height', () => {
    const component = ReactTestRenderer.create(
      <Heading3
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('line-height', '450');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Heading3
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
