import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Container from '../src/Container';
import * as utils from '../src/utils/';

describe('Container', () => {
  test('should render a Container', () => {
    const component = ReactTestRenderer.create(<Container theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Container theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a max-width', () => {
    const spy = jest.spyOn(utils, 'getSizeOrDefault');
    const component = ReactTestRenderer.create(
      <Container
        theme={theme}
        maxWidth={720}
      />,
    );
    expect(component).toHaveStyleRule('max-width', '720px');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a default max-width', () => {
    const component = ReactTestRenderer.create(
      <Container theme={theme} />,
    );
    expect(component).toHaveStyleRule('max-width', '1024px');
  });
});
