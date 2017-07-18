import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Heading6 from '../src/Heading6';
import * as utils from '../src/utils/';

const theme = getTheme({
  h6: {
    fontSize: '29px',
    fontWeight: 900,
    lineHeight: 450,
  },
});

describe('Heading6', () => {
  test('should render an Heading6', () => {
    const component = ReactTestRenderer.create(<Heading6 theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an h6 tag', () => {
    const component = ReactTestRenderer.create(<Heading6 theme={theme} />).toJSON();
    expect(component.type).toEqual('h6');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Heading6
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('color', 'rgba(255, 255, 255, 0.54)');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a font-size', () => {
    const component = ReactTestRenderer.create(
      <Heading6
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-size', '29px');
  });

  test('should have a font-weight', () => {
    const component = ReactTestRenderer.create(
      <Heading6
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '900');
  });

  test('should have a line-height', () => {
    const component = ReactTestRenderer.create(
      <Heading6
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('line-height', '450');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Heading6
        theme={theme}
        textColor="#FFFFFF"
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
