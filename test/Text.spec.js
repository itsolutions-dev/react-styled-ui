import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Text from '../src/Text';

describe('Text', () => {
  test('should render a Text', () => {
    const component = ReactTestRenderer.create(<Text theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a p tag', () => {
    const component = ReactTestRenderer.create(<Text theme={theme} />).toJSON();
    expect(component.type).toEqual('p');
  });
});
