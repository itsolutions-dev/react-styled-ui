import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Toggle from '../src/Toggle';
import * as utils from '../src/utils/';

const theme = getTheme({
  palette: {
    primary: '#1a5a99',
    primaryBorder: '#bababa',
  },
});

describe('Toggle', () => {
  test('should render a Toggle', () => {
    const component = ReactTestRenderer.create(<Toggle id="id" theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render an input with type checkbox', () => {
    const component = ReactTestRenderer.create(<Toggle theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.type).toEqual('checkbox');
  });

  test('should be primary by default', () => {
    const spies = [
      jest.spyOn(utils, 'getBackgroundColor'),
    ];
    const component = ReactTestRenderer.create(<Toggle id="id" theme={theme} />).toJSON();
    spies.forEach(spy => expect(spy).toHaveBeenCalled());
    expect(component).toMatchSnapshot();
  });

  test('should have the provided id', () => {
    const component = ReactTestRenderer.create(<Toggle id="foo" theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.id).toEqual('foo');
    expect(component.children.find(x => x.type === 'label').props.htmlFor).toEqual('foo');
  });

  test('should automatically generate an id', () => {
    const component = ReactTestRenderer.create(<Toggle theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.id).toBeDefined();
    expect(component.children.find(x => x.type === 'label').props.htmlFor).toBeDefined();
  });

  test('should pass props to the input', () => {
    const component = ReactTestRenderer.create(<Toggle id="id" foo="bar" theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.foo).toEqual('bar');
  });
});
