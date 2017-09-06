import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Card from '../src/Card';

describe('Card', () => {
  test('should render a Card', () => {
    const component = ReactTestRenderer.create(<Card theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Card theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a default width', () => {
    const component = ReactTestRenderer.create(
      <Card
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('width', '300px');
  });

  test('should handle string width', () => {
    const component = ReactTestRenderer.create(
      <Card
        theme={theme}
        width="20em"
      />,
    );
    expect(component).toHaveStyleRule('width', '20em');
  });

  test('should handle numeric width', () => {
    const component = ReactTestRenderer.create(
      <Card
        theme={theme}
        width={30}
      />,
    );
    expect(component).toHaveStyleRule('width', '30px');
  });
});
