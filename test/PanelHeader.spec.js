import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import PanelHeader from '../src/PanelHeader';

const theme = getTheme({
  radius: '8px',
  palette: {
    primary: 'blue',
    primaryText: 'white',
  },
});

describe('PanelHeader', () => {
  test('should render a PanelHeader', () => {
    const component = ReactTestRenderer.create(<PanelHeader theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<PanelHeader theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have the given border color', () => {
    const component = ReactTestRenderer.create(<PanelHeader borderColor="green" theme={theme} />);
    expect(component).toHaveStyleRule('background', 'green');
    expect(component).toHaveStyleRule('border', '1px solid green');
  });

  test('should be primary by default', () => {
    const component = ReactTestRenderer.create(<PanelHeader theme={theme} />);
    expect(component).toHaveStyleRule('color', 'white');
    expect(component).toHaveStyleRule('background', 'blue');
    expect(component).toHaveStyleRule('border', '1px solid blue');
  });

  test('should have the given radius', () => {
    const component = ReactTestRenderer.create(<PanelHeader radius={10} theme={theme} />);
    expect(component).toHaveStyleRule('border-top-left-radius', '10px');
    expect(component).toHaveStyleRule('border-top-right-radius', '10px');
  });

  test('should get radius from theme', () => {
    const component = ReactTestRenderer.create(<PanelHeader theme={theme} />);
    expect(component).toHaveStyleRule('border-top-left-radius', '8px');
    expect(component).toHaveStyleRule('border-top-right-radius', '8px');
  });
});
