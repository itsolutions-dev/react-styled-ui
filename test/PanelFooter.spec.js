import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import PanelFooter from '../src/PanelFooter';

const theme = getTheme({
  radius: '8px',
  palette: {
    primary: 'blue',
  },
});

describe('PanelFooter', () => {
  test('should render a PanelFooter', () => {
    const component = ReactTestRenderer.create(<PanelFooter theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<PanelFooter theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have the given border color', () => {
    const component = ReactTestRenderer.create(<PanelFooter borderColor="green" theme={theme} />);
    expect(component).toHaveStyleRule('border-top', '1px solid green');
    expect(component).toHaveStyleRule('border-bottom', '1px solid green');
    expect(component).toHaveStyleRule('border-left', '1px solid green');
    expect(component).toHaveStyleRule('border-right', '1px solid green');
  });

  test('should be primary by default', () => {
    const component = ReactTestRenderer.create(<PanelFooter theme={theme} />);
    expect(component).toHaveStyleRule('color', 'blue');
    expect(component).toHaveStyleRule('border-top', '1px solid blue');
    expect(component).toHaveStyleRule('border-bottom', '1px solid blue');
    expect(component).toHaveStyleRule('border-left', '1px solid blue');
    expect(component).toHaveStyleRule('border-right', '1px solid blue');
  });

  test('should have the given radius', () => {
    const component = ReactTestRenderer.create(<PanelFooter radius={10} theme={theme} />);
    expect(component).toHaveStyleRule('border-bottom-left-radius', '10px');
    expect(component).toHaveStyleRule('border-bottom-right-radius', '10px');
  });

  test('should get radius from theme', () => {
    const component = ReactTestRenderer.create(<PanelFooter theme={theme} />);
    expect(component).toHaveStyleRule('border-bottom-left-radius', '8px');
    expect(component).toHaveStyleRule('border-bottom-right-radius', '8px');
  });
});
