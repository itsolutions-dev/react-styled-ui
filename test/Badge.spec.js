import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Badge from '../src/Badge';

const theme = getTheme({
  radius: '7px',
});

describe('Badge', () => {
  test('should render a Badge', () => {
    const component = ReactTestRenderer.create(<Badge theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Badge theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a border-radius', () => {
    const component = ReactTestRenderer.create(
      <Badge
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '7px');
  });
});
