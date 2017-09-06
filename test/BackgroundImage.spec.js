import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import BackgroundImage from '../src/BackgroundImage';

describe('BackgroundImage', () => {
  test('should render a BackgroundImage', () => {
    const component = ReactTestRenderer.create(<BackgroundImage theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<BackgroundImage theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should handle a src prop', () => {
    const component = ReactTestRenderer.create(
      <BackgroundImage
        theme={theme}
        src="http://localhost:8080/image.png"
      />,
    );
    expect(component).toHaveStyleRule('background-image', 'url(http://localhost:8080/image.png)');
  });

  test('should have a default ratio', () => {
    const component = ReactTestRenderer.create(
      <BackgroundImage
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('padding-bottom', '100%');
  });

  test('should handle a ratio prop', () => {
    const component = ReactTestRenderer.create(
      <BackgroundImage
        theme={theme}
        ratio={1 / 2}
      />,
    );
    expect(component).toHaveStyleRule('padding-bottom', '50%');
  });
});
