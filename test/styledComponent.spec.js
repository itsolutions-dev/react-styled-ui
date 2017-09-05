import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import styled, { css } from '../src/styledComponent';

describe('styledComponent', () => {
  const Button = styled({
    component: 'button',
    style: css`
      width: 250px;
    `,
  });

  test('should export css', () => {
    expect(css).toBeDefined();
  });

  test('should create a styled-component with tag', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} />).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should handle width', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} width={7} />);
    expect(component).toHaveStyleRule('width', '7px');
  });

  test('should handle height', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} height={7} />);
    expect(component).toHaveStyleRule('height', '7px');
  });

  test('should handle color', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} color="#C0C0C0" />);
    expect(component).toHaveStyleRule('color', '#C0C0C0');
  });

  test('should handle background', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} background="#C0C0C0" />);
    expect(component).toHaveStyleRule('background', '#C0C0C0');
  });

  test('should handle zIndex', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} zIndex="999" />);
    expect(component).toHaveStyleRule('z-index', '999');
  });

  test('should handle fontSize', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} fontSize={7} />);
    expect(component).toHaveStyleRule('font-size', '7px');
  });

  test('should handle radius', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} radius={7} />);
    expect(component).toHaveStyleRule('border-radius', '7px');
  });

  test('should handle opacity', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} opacity={0.7} />);
    expect(component).toHaveStyleRule('opacity', '0.7');
  });

  test('should handle numeric margin', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} margin={7} />);
    expect(component).toHaveStyleRule('margin', '7px');
  });

  test('should handle string margin', () => {
    let component = ReactTestRenderer.create(<Button theme={theme} margin="7em" />);
    expect(component).toHaveStyleRule('margin', '7em');
    component = ReactTestRenderer.create(<Button theme={theme} margin="7em 8em" />);
    expect(component).toHaveStyleRule('margin', '7em 8em');
  });

  test('should handle marginTop', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginTop={7} />);
    expect(component).toHaveStyleRule('margin-top', '7px');
  });

  test('should handle marginBottom', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginBottom={7} />);
    expect(component).toHaveStyleRule('margin-bottom', '7px');
  });

  test('should handle marginLeft', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginLeft={7} />);
    expect(component).toHaveStyleRule('margin-left', '7px');
  });

  test('should handle marginRight', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginRight={7} />);
    expect(component).toHaveStyleRule('margin-right', '7px');
  });

  test('should handle marginX', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginX={7} />);
    expect(component).toHaveStyleRule('margin-left', '7px');
    expect(component).toHaveStyleRule('margin-right', '7px');
  });

  test('should handle marginY', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} marginY={7} />);
    expect(component).toHaveStyleRule('margin-top', '7px');
    expect(component).toHaveStyleRule('margin-bottom', '7px');
  });

  test('should handle numeric padding', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} padding={7} />);
    expect(component).toHaveStyleRule('padding', '7px');
  });

  test('should handle string padding', () => {
    let component = ReactTestRenderer.create(<Button theme={theme} padding="7em" />);
    expect(component).toHaveStyleRule('padding', '7em');
    component = ReactTestRenderer.create(<Button theme={theme} padding="7em 8em" />);
    expect(component).toHaveStyleRule('padding', '7em 8em');
  });

  test('should handle paddingTop', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingTop={7} />);
    expect(component).toHaveStyleRule('padding-top', '7px');
  });

  test('should handle paddingBottom', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingBottom={7} />);
    expect(component).toHaveStyleRule('padding-bottom', '7px');
  });

  test('should handle paddingLeft', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingLeft={7} />);
    expect(component).toHaveStyleRule('padding-left', '7px');
  });

  test('should handle paddingRight', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingRight={7} />);
    expect(component).toHaveStyleRule('padding-right', '7px');
  });

  test('should handle paddingX', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingX={7} />);
    expect(component).toHaveStyleRule('padding-left', '7px');
    expect(component).toHaveStyleRule('padding-right', '7px');
  });

  test('should handle paddingY', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} paddingY={7} />);
    expect(component).toHaveStyleRule('padding-top', '7px');
    expect(component).toHaveStyleRule('padding-bottom', '7px');
  });

  test('should handle media', () => {
    const themeWithMedia = {
      ...theme,
      media: {
        foo: '(min-width: 500px)',
      },
    };
    const component = ReactTestRenderer.create(
      <Button
        theme={themeWithMedia}
        paddingY={20}
        media={{
          foo: {
            paddingY: 7,
          },
        }}
      />,
    ).toJSON();
    expect(component).toMatchSnapshot();
    /* expect(component).toHaveStyleRule('padding-top', '20px');
    expect(component).toHaveStyleRule('padding-bottom', '20px');
    expect({
      component,
      media: themeWithMedia.media.foo,
    }).toHaveStyleRule('padding-top', '7px');
    expect({
      component,
      media: themeWithMedia.media.foo,
    }).toHaveStyleRule('padding-bottom', '7px'); */
  });

  test('should ignore media if not present', () => {
    const themeWithMedia = {
      ...theme,
      media: {
        foo: '(min-width: 500px)',
      },
    };
    const component = ReactTestRenderer.create(
      <Button
        theme={themeWithMedia}
        paddingY={20}
        media={{
          bar: {
            paddingY: 7,
          },
        }}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  test('should create a component with attrs', () => {
    const ButtonWithAttrs = styled({
      component: 'button',
      props: {
        size: 'small',
      },
      style: css`
        width: 250px;
      `,
    });
    const component = ReactTestRenderer.create(<ButtonWithAttrs theme={theme} />).toJSON();
    expect(component.props.size).toEqual('small');
  });
});
