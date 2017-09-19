import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Blockquote from '../src/Blockquote';
import * as utils from '../src/utils/';

const theme = getTheme({
  font: {
    size: '16px',
  },
});

describe('Blockquote', () => {
  test('should render a Blockquote', () => {
    const component = ReactTestRenderer.create(<Blockquote theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a blockquote tag', () => {
    const component = ReactTestRenderer.create(<Blockquote theme={theme} />).toJSON();
    expect(component.type).toEqual('blockquote');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Blockquote
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a size', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Blockquote
        theme={theme}
        size={20}
      />,
    );
    expect(component).toHaveStyleRule('font-size', '20px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a border', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Blockquote
        theme={theme}
        backgroundColor="#11C1B9"
      />,
    );
    expect(component).toHaveStyleRule('border-left', '5px solid rgba(17,193,185,0.3)');
    expect(spy).toHaveBeenCalled();
  });

  test('should have the correct font size', () => {
    const component = ReactTestRenderer.create(
      <Blockquote
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('font-size', '16px');
  });
});
