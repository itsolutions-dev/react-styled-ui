import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import theme from '../src/theme';
import Link from '../src/Link';
import * as utils from '../src/utils/';
import './testUtils/jest';

describe('Link', () => {
  test('should render a Link', () => {
    const spy = {
      getTextColor: jest.spyOn(utils, 'getTextColor'),
      getBackgroundColor: jest.spyOn(utils, 'getTextColor'),
      getOpacity: jest.spyOn(utils, 'getTextColor'),
      getHover: jest.spyOn(utils, 'getTextColor'),
    };
    const rendered = ReactTestUtils.renderIntoDocument(<Link theme={theme} />);
    const component = ReactTestUtils.findRenderedDOMComponentWithTag(
      rendered,
      'a',
    );
    expect(spy.getTextColor).toHaveBeenCalled();
    expect(spy.getBackgroundColor).toHaveBeenCalled();
    expect(spy.getTextColor).toHaveBeenCalled();
    expect(spy.getOpacity).toHaveBeenCalled();
    expect(component).toBeDefined();
  });

  test('should provide correct styles', () => {
    const component = ReactTestRenderer.create(
      <Link
        theme={theme}
        textColor="blue"
        backgroundColor="white"
        opacity={0.75}
        hoverColor="green"
      />,
    );
    expect(component).toHaveStyleRule('color', 'blue');
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(component).toHaveStyleRule('opacity', 0.75);
    expect({
      component,
      modifier: ':hover',
    }).toHaveStyleRule('background-color', 'green');
  });
});
