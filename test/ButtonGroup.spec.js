import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', () => {
  test('should render a ButtonGroup', () => {
    const component = ReactTestRenderer.create(<ButtonGroup theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<ButtonGroup theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should horizontal by default', () => {
    const component = ReactTestRenderer.create(
      <ButtonGroup
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('flex-direction', 'row');
  });

  test('should be vertical', () => {
    const component = ReactTestRenderer.create(
      <ButtonGroup
        theme={theme}
        vertical
      />,
    );
    expect(component).toHaveStyleRule('flex-direction', 'column');
  });

  test('should have child button with margin 0', () => {
    const component = ReactTestRenderer.create(
      <ButtonGroup
        theme={theme}
        vertical
      />,
    );
    expect({
      component,
      modifier: '> button',
    }).toHaveStyleRule('margin', '0');
  });
});
