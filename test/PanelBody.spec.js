import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import PanelBody from '../src/PanelBody';

const theme = getTheme({
  radius: '8px',
  palette: {
    primary: 'blue',
  },
});

describe('PanelBody', () => {
  test('should render a PanelBody', () => {
    const component = ReactTestRenderer.create(<PanelBody theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<PanelBody theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have the given border color', () => {
    const component = ReactTestRenderer.create(<PanelBody borderColor="green" theme={theme} />);
    expect(component).toHaveStyleRule('border-left', '1px solid green');
    expect(component).toHaveStyleRule('border-right', '1px solid green');
  });

  test('should be primary by default', () => {
    const component = ReactTestRenderer.create(<PanelBody theme={theme} />);
    expect(component).toHaveStyleRule('border-left', '1px solid blue');
    expect(component).toHaveStyleRule('border-right', '1px solid blue');
  });
});
