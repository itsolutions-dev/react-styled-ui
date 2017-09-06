import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Loader from '../src/Loader';
import * as utils from '../src/utils/';

const theme = getTheme({
  palette: {
    primary: '#1a5a99',
    primaryBorder: '#bababa',
  },
});

describe('Loader', () => {
  test('should render a Loader', () => {
    const component = ReactTestRenderer.create(<Loader theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a div tag', () => {
    const component = ReactTestRenderer.create(<Loader theme={theme} />).toJSON();
    expect(component.type).toEqual('div');
  });

  test('should have the given color', () => {
    const component = ReactTestRenderer.create(<Loader color="green" theme={theme} />).toJSON();
    expect({
      component,
      modifier: '> svg > circle',
    }).toHaveStyleRule('stroke', 'green');
  });

  test('should have a thickness', () => {
    const component = ReactTestRenderer.create(<Loader thickness={6} theme={theme} />).toJSON();
    expect({
      component,
      modifier: '> svg > circle',
    }).toHaveStyleRule('stroke-width', '6');
  });

  test('should have a size', () => {
    const component = ReactTestRenderer.create(<Loader width={50} theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('width', '50px');
  });

  test('should be primary by default', () => {
    const spies = [
      jest.spyOn(utils, 'getBackgroundColor'),
    ];
    const component = ReactTestRenderer.create(<Loader theme={theme} />).toJSON();
    spies.forEach(spy => expect(spy).toHaveBeenCalled());
    expect(component).toMatchSnapshot();
  });
});
