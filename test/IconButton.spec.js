import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import IconButton from '../src/IconButton';

const SVGExample = (
  <svg viewBox="0 0 24 24" style={{ display: 'inline-block', color: 'rgba(0, 0, 0, 0.87)', fill: 'currentcolor', height: 36, width: 36, userSelect: 'none', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms' }}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>);
describe('IconButton', () => {
  test('should render a IconButton', () => {
    const component = ReactTestRenderer.create(<IconButton theme={theme}>{SVGExample}</IconButton>);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a button tag [TXT]', () => {
    const component = ReactTestRenderer.create(
      <IconButton theme={theme}>{SVGExample}</IconButton>,
  ).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should have a default style', () => {
    const component = ReactTestRenderer.create(<IconButton theme={theme}>{SVGExample}</IconButton>);
    expect(component).toHaveStyleRule('border-radius', '99999px');
    expect(component).toHaveStyleRule('background', 'none');
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('width', '66px');
    expect(component).toHaveStyleRule('height', '66px');
  });

  test('should have a custom style', () => {
    const component = ReactTestRenderer.create(<IconButton backgroundColor="#ff0000" size={33} theme={theme}>{SVGExample}</IconButton>);
    expect(component).toHaveStyleRule('border-radius', '99999px');
    expect(component).toHaveStyleRule('background-color', '#ff0000');
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('width', '33px');
    expect(component).toHaveStyleRule('height', '33px');
  });

  test('should have a custom background-color onHover', () => {
    const component = ReactTestRenderer.create(<IconButton backgroundColorHover="#ff0000" theme={theme}>{SVGExample}</IconButton>);
    expect(component).toHaveStyleRule('background', 'none');
    expect(({
      component,
      modifier: '&:hover',
    })).toHaveStyleRule('background-color', '#ff0000');
  });

  test('should have a primary onHover style', () => {
    const component = ReactTestRenderer.create(<IconButton secondary backgroundColorHover="#ff0000" theme={theme}>{SVGExample}</IconButton>);
    expect(component).toHaveStyleRule('border-radius', '99999px');
    expect(component).toHaveStyleRule('background-color', theme.palette.secondary);
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('width', '66px');
    expect(component).toHaveStyleRule('height', '66px');
    expect(({
      component,
      modifier: '&:hover',
    })).toHaveStyleRule('background-color', '#ff0000');
  });

  test('should have a primary and secondary false', () => {
    const component = ReactTestRenderer.create(
      <IconButton primary={false} secondary={false} theme={theme}>{SVGExample}</IconButton>);
    expect(component).toHaveStyleRule('border-radius', '99999px');
    expect(component).toHaveStyleRule('background', 'none');
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('width', '66px');
    expect(component).toHaveStyleRule('height', '66px');
  });
});
