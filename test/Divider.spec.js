import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Divider from '../src/Divider';

const theme = getTheme({
  palette: {
    defaultText: '#C0C0C0',
  },
});

describe('Divider', () => {
  test('should render a Divider', () => {
    const component = ReactTestRenderer.create(<Divider theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an hr tag', () => {
    const component = ReactTestRenderer.create(<Divider theme={theme} />).toJSON();
    expect(component.type).toEqual('hr');
  });

  test('should have size 1px by default', () => {
    const component = ReactTestRenderer.create(
      <Divider
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-bottom-width', '1px');
  });

  test('should handle size prop', () => {
    const component = ReactTestRenderer.create(
      <Divider
        theme={theme}
        size="2px"
      />,
    );
    expect(component).toHaveStyleRule('border-bottom-width', '2px');
  });

  test('should have a default color', () => {
    const component = ReactTestRenderer.create(
      <Divider
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-bottom-color', '#C0C0C0');
  });

  test('should handle color prop', () => {
    const component = ReactTestRenderer.create(
      <Divider
        theme={theme}
        color="blue"
      />,
    );
    expect(component).toHaveStyleRule('border-bottom-color', 'blue');
  });
});
