import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Code from '../src/Code';
import * as utils from '../src/utils/';

describe('Code', () => {
  test('should render a Code', () => {
    const component = ReactTestRenderer.create(<Code theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an a tag', () => {
    const component = ReactTestRenderer.create(<Code theme={theme} />).toJSON();
    expect(component.type).toEqual('code');
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Code
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });
});
