import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import Heading from '../src/Heading';
import Heading1 from '../src/Heading1';
import Heading3 from '../src/Heading3';

describe('Heading', () => {
  test('should render an Heading', () => {
    const component = ReactTestRenderer.create(<Heading />);
    expect(component).toBeDefined();
  });

  test('should be an Heading1 by default', () => {
    ReactTestUtils.isElementOfType(
      <Heading />,
      Heading1,
    );
  });

  test('should be an Heading with size', () => {
    ReactTestUtils.isElementOfType(
      <Heading size={3} />,
      Heading3,
    );
  });
});
