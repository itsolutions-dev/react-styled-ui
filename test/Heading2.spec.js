import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Heading2 from '../src/Heading2';
import * as utils from '../src/utils/';

const theme = getTheme({
  h2: {
    fontSize: '29px',
    fontWeight: 900,
    lineHeight: 450,
  },
});

describe('Heading2', () => {
  test('should render an Heading2', () => {
    const component = ReactTestRenderer.create(<Heading2 theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an h2 tag', () => {
    const component = ReactTestRenderer.create(<Heading2 theme={theme} />).toJSON();
    expect(component.type).toEqual('h2');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Heading2
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('color', 'rgba(255, 255, 255, 0.9)');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a font-size', () => {
    const component = ReactTestRenderer.create(
      <Heading2
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-size', '29px');
  });

  test('should have a font-weight', () => {
    const component = ReactTestRenderer.create(
      <Heading2
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('font-weight', '900');
  });

  test('should have a line-height', () => {
    const component = ReactTestRenderer.create(
      <Heading2
        theme={theme}
        textColor="#FFFFFF"
      />,
    );
    expect(component).toHaveStyleRule('line-height', '450');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Heading2
        theme={theme}
        textColor="#FFFFFF"
      />,
    ).toJSON();
    expect(component).toMatchStyledComponentsSnapshot();
  });
});
