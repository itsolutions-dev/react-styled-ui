import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Footer from '../src/Footer';
import * as utils from '../src/utils/';

describe('Footer', () => {
  test('should render a Footer', () => {
    const component = ReactTestRenderer.create(<Footer theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an a tag', () => {
    const component = ReactTestRenderer.create(<Footer theme={theme} />).toJSON();
    expect(component.type).toEqual('footer');
  });

  test('should have a background', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Footer
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a border', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(
      <Footer
        theme={theme}
        borderColor="white"
      />,
    );
    expect(component).toHaveStyleRule('border', '1px solid white');
    expect(spy).toHaveBeenCalled();
  });
});
