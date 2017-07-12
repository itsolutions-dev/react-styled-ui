import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import ButtonCircle from '../src/ButtonCircle';

describe('ButtonCircle', () => {
  test('should render a ButtonCircle', () => {
    const component = ReactTestRenderer.create(<ButtonCircle theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a button tag', () => {
    const component = ReactTestRenderer.create(<ButtonCircle theme={theme} />).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should have a border-radius', () => {
    const component = ReactTestRenderer.create(
      <ButtonCircle
        theme={theme}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '9999px');
  });
});
