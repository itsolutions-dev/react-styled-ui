import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Message from '../src/Message';
import * as utils from '../src/utils/';

describe('Message', () => {
  test('should render a Message', () => {
    const component = ReactTestRenderer.create(<Message theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Message theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Message
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a background', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Message
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
