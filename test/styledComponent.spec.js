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

  test('should handle width', () => {
    const component = ReactTestRenderer.create(<Button width={7} />);
    expect(component).toHaveStyleRule('width', '7px');
  });

  test('should handle height', () => {
    const component = ReactTestRenderer.create(<Button height={7} />);
    expect(component).toHaveStyleRule('height', '7px');
  });

  test('should handle color', () => {
    const component = ReactTestRenderer.create(<Button color="#C0C0C0" />);
    expect(component).toHaveStyleRule('color', '#C0C0C0');
  });

  test('should handle background', () => {
    const component = ReactTestRenderer.create(<Button background="#C0C0C0" />);
    expect(component).toHaveStyleRule('background', '#C0C0C0');
  });

  test('should handle fontSize', () => {
    const component = ReactTestRenderer.create(<Button fontSize={7} />);
    expect(component).toHaveStyleRule('font-size', '7px');
  });

  test('should handle radius', () => {
    const component = ReactTestRenderer.create(<Button radius={7} />);
    expect(component).toHaveStyleRule('border-radius', '7px');
  });

  test('should handle opacity', () => {
    const component = ReactTestRenderer.create(<Button opacity={0.7} />);
    expect(component).toHaveStyleRule('opacity', '0.7');
  });

  test('should handle numeric margin', () => {
    const component = ReactTestRenderer.create(<Button margin={7} />);
    expect(component).toHaveStyleRule('margin', '7px');
  });

  test('should handle string margin', () => {
    let component = ReactTestRenderer.create(<Button margin="7em" />);
    expect(component).toHaveStyleRule('margin', '7em');
    component = ReactTestRenderer.create(<Button margin="7em 8em" />);
    expect(component).toHaveStyleRule('margin', '7em 8em');
  });

  test('should handle marginTop', () => {
    const component = ReactTestRenderer.create(<Button marginTop={7} />);
    expect(component).toHaveStyleRule('margin-top', '7px');
  });

  test('should handle marginBottom', () => {
    const component = ReactTestRenderer.create(<Button marginBottom={7} />);
    expect(component).toHaveStyleRule('margin-bottom', '7px');
  });

  test('should handle marginLeft', () => {
    const component = ReactTestRenderer.create(<Button marginLeft={7} />);
    expect(component).toHaveStyleRule('margin-left', '7px');
  });

  test('should handle marginRight', () => {
    const component = ReactTestRenderer.create(<Button marginRight={7} />);
    expect(component).toHaveStyleRule('margin-right', '7px');
  });

  test('should handle marginX', () => {
    const component = ReactTestRenderer.create(<Button marginX={7} />);
    expect(component).toHaveStyleRule('margin-left', '7px');
    expect(component).toHaveStyleRule('margin-right', '7px');
  });

  test('should handle marginY', () => {
    const component = ReactTestRenderer.create(<Button marginY={7} />);
    expect(component).toHaveStyleRule('margin-top', '7px');
    expect(component).toHaveStyleRule('margin-bottom', '7px');
  });

  test('should handle numeric padding', () => {
    const component = ReactTestRenderer.create(<Button padding={7} />);
    expect(component).toHaveStyleRule('padding', '7px');
  });

  test('should handle string padding', () => {
    let component = ReactTestRenderer.create(<Button padding="7em" />);
    expect(component).toHaveStyleRule('padding', '7em');
    component = ReactTestRenderer.create(<Button padding="7em 8em" />);
    expect(component).toHaveStyleRule('padding', '7em 8em');
  });

  test('should handle paddingTop', () => {
    const component = ReactTestRenderer.create(<Button paddingTop={7} />);
    expect(component).toHaveStyleRule('padding-top', '7px');
  });

  test('should handle paddingBottom', () => {
    const component = ReactTestRenderer.create(<Button paddingBottom={7} />);
    expect(component).toHaveStyleRule('padding-bottom', '7px');
  });

  test('should handle paddingLeft', () => {
    const component = ReactTestRenderer.create(<Button paddingLeft={7} />);
    expect(component).toHaveStyleRule('padding-left', '7px');
  });

  test('should handle paddingRight', () => {
    const component = ReactTestRenderer.create(<Button paddingRight={7} />);
    expect(component).toHaveStyleRule('padding-right', '7px');
  });

  test('should handle paddingX', () => {
    const component = ReactTestRenderer.create(<Button paddingX={7} />);
    expect(component).toHaveStyleRule('padding-left', '7px');
    expect(component).toHaveStyleRule('padding-right', '7px');
  });

  test('should handle paddingY', () => {
    const component = ReactTestRenderer.create(<Button paddingY={7} />);
    expect(component).toHaveStyleRule('padding-top', '7px');
    expect(component).toHaveStyleRule('padding-bottom', '7px');
  });
});
