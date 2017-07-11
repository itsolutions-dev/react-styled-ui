import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Image from '../src/Image';

describe('Image', () => {
  test('should render an Image', () => {
    const component = ReactTestRenderer.create(<Image theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have an img tag', () => {
    const component = ReactTestRenderer.create(<Image theme={theme} />).toJSON();
    expect(component.type).toEqual('img');
  });
});
