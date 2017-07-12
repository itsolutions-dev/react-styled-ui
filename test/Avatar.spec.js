import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Avatar from '../src/Avatar';

describe('Avatar', () => {
  test('should render a Avatar', () => {
    const component = ReactTestRenderer.create(<Avatar theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an img tag', () => {
    const component = ReactTestRenderer.create(<Avatar theme={theme} />).toJSON();
    expect(component.type).toEqual('img');
  });

  test('should have a default radius', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '99999px');
  });

  test('should have a radius', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        radius={40}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '40px');
  });

  test('should have a default size', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('height', '40px');
    expect(component).toHaveStyleRule('width', '40px');
  });

  test('should handle string size', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        size="20em"
      />,
    );
    expect(component).toHaveStyleRule('height', '20em');
    expect(component).toHaveStyleRule('width', '20em');
  });

  test('should handle numeric size', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        size={30}
      />,
    );
    expect(component).toHaveStyleRule('height', '30px');
    expect(component).toHaveStyleRule('width', '30px');
  });
});
