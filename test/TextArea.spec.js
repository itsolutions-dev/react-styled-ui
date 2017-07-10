import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import TextArea from '../src/TextArea';
import * as utils from '../src/utils/';

describe('TextArea', () => {
  test('should render a TextArea', () => {
    const component = ReactTestRenderer.create(<TextArea theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a textarea tag', () => {
    const component = ReactTestRenderer.create(<TextArea theme={theme} />).toJSON();
    expect(component.type).toEqual('textarea');
  });

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <TextArea
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <TextArea
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
      <TextArea
        theme={theme}
        opacity={0.75}
      />,
    );
    expect(component).toHaveStyleRule('opacity', '0.75');
    expect(spy).toHaveBeenCalled();
  });
});
