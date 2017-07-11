import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import styledComponent, { css } from '../src/styledComponent';

describe('styledComponent', () => {
  const Button = styledComponent('button', css`
    width: 250px;
  `);

  test('should export css', () => {
    expect(css).toBeDefined();
  });

  test('should create a styled-component with tag', () => {
    const component = ReactTestRenderer.create(<Button />).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should inject props style', () => {
    const props = ['color', 'background'];
    props.forEach((x) => {
      const buttonProps = { [x]: 'blue' };
      const component = ReactTestRenderer.create(<Button {...buttonProps} />);
      expect(component).toHaveStyleRule(x, 'blue');
    });
  });
});
