import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Checkbox from '../src/Checkbox';
import * as utils from '../src/utils/';

const theme = getTheme({
  palette: {
    primary: '#1a5a99',
    primaryBorder: '#bababa',
  },
});

describe('Checkbox', () => {
  test('should render a Checkbox', () => {
    const component = ReactTestRenderer.create(<Checkbox theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should render an input with type checkbox', () => {
    const component = ReactTestRenderer.create(<Checkbox theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.type).toEqual('checkbox');
  });

  test('should be primary by default', () => {
    const spies = [
      jest.spyOn(utils, 'getBackgroundColor'),
      jest.spyOn(utils, 'getBorder'),
    ];
    const component = ReactTestRenderer.create(<Checkbox id="id" theme={theme} />).toJSON();
    spies.forEach(spy => expect(spy).toHaveBeenCalled());
    expect(component).toMatchSnapshot();
  });

  test('should have the provided id', () => {
    const component = ReactTestRenderer.create(<Checkbox id="foo" theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.id).toEqual('foo');
    expect(component.children.find(x => x.type === 'label').props.htmlFor).toEqual('foo');
  });

  test('should automatically generate an id', () => {
    const component = ReactTestRenderer.create(<Checkbox theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.id).toBeDefined();
    expect(component.children.find(x => x.type === 'label').props.htmlFor).toBeDefined();
  });

  test('should pass props to the input', () => {
    const component = ReactTestRenderer.create(<Checkbox id="id" foo="bar" theme={theme} />).toJSON();
    expect(component.children.find(x => x.type === 'input').props.foo).toEqual('bar');
  });
});
