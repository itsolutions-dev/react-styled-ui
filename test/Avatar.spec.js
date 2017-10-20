import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import Avatar from '../src/Avatar';

describe('Avatar', () => {
  test('should render a Img-Avatar', () => {
    const component = ReactTestRenderer.create(<Avatar src="http://lorempixel.com/400/200/nature/" theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have an img tag [IMG]', () => {
    const component = ReactTestRenderer.create(<Avatar src="http://lorempixel.com/400/200/nature/" theme={theme} />).toJSON();
    expect(component.children[0].type).toEqual('img');
  });

  test('should have a default radius [IMG]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        src="http://lorempixel.com/400/200/nature/"
        theme={theme}
      />,
    );
    expect({
      component,
      modifier: '> img',
    }).toHaveStyleRule('border-radius', '99999px');
  });

  test('should have a radius [IMG]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        src="http://lorempixel.com/400/200/nature/"
        theme={theme}
        radius={40}
      />,
    );
    expect({
      component,
      modifier: '> img',
    }).toHaveStyleRule('border-radius', '40px');
  });

  test('should have a default size [IMG]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        src="http://lorempixel.com/400/200/nature/"
        theme={theme}
      />,
    );
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('height', '40px');
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('width', '40px');
  });

  test('should handle string size [IMG]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        src="http://lorempixel.com/400/200/nature/"
        theme={theme}
        size="20em"
      />,
    );
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('height', '20em');
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('width', '20em');
  });

  test('should handle numeric size [IMG]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        src="http://lorempixel.com/400/200/nature/"
        theme={theme}
        size={30}
      />,
    );
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('height', '30px');
    expect(({
      component,
      modifier: '> img',
    })).toHaveStyleRule('width', '30px');
  });

  test('should render a Avatar [TXT]', () => {
    const component = ReactTestRenderer.create(<Avatar theme={theme} >A</Avatar>);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag [TXT]', () => {
    const component = ReactTestRenderer.create(<Avatar theme={theme} >A</Avatar>).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have a default radius [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar theme={theme}>A</Avatar>,
    );
    expect(component).toHaveStyleRule('border-radius', '99999px');
  });

  test('should have a radius [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        radius={40}
      >
        A
      </Avatar>,
    );
    expect(component).toHaveStyleRule('border-radius', '40px');
  });

  test('should have a default size [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar theme={theme}>A</Avatar>,
    );
    expect(component).toHaveStyleRule('height', '40px');
    expect(component).toHaveStyleRule('width', '40px');
  });

  test('should handle string size [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        size="20em"
      >
        A
      </Avatar>,
    );
    expect(component).toHaveStyleRule('height', '20em');
    expect(component).toHaveStyleRule('width', '20em');
  });

  test('should handle numeric size [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        size={30}
      >
        A
      </Avatar>,
    );
    expect(component).toHaveStyleRule('height', '30px');
    expect(component).toHaveStyleRule('width', '30px');
  });

  test('should have color [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        color="#FF0000"
      >
        A
      </Avatar>,
    );
    expect(component).toHaveStyleRule('color', '#FF0000');
  });

  test('should have background-color [TXT]', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        backgroundColor="#FF0000"
      >
        A
      </Avatar>,
    );
    expect(component).toHaveStyleRule('background-color', '#FF0000 !important');
  });

  test('should match snapshot', () => {
    const component = ReactTestRenderer.create(
      <Avatar
        theme={theme}
        position="absolute"
      >
        A
      </Avatar>,
    );
    expect(component).toMatchSnapshot();
  });
});
