import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Heading4 from '../src/Heading4';
import * as utils from '../src/utils/';

const theme = getTheme({
  h4: {
    fontSize: '29px',
    fontWeight: 900,
    lineHeight: 450,
  },
});

describe('Heading4', () => {
  test('should render an Heading4', () => {
    const component = ReactTestRenderer.create(<Heading4 theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an h4 tag', () => {
    const component = ReactTestRenderer.create(<Heading4 theme={theme} />).toJSON();
    expect(component.type).toEqual('h4');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Heading4
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('color', 'rgba(255,255,255,0.54)');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a font-size', () => {
    const component = ReactTestRenderer.create(
      <Heading4
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-size', '29px');
  });

  test('should have a font-weight', () => {
    const component = ReactTestRenderer.create(
      <Heading4
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '900');
  });

  test('should have a line-height', () => {
    const component = ReactTestRenderer.create(
      <Heading4
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('line-height', '450');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Heading4
        theme={theme}
        textColor="#FFFFFF"
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
