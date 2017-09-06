import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import getTheme from '../src/getTheme';
import Slider from '../src/Slider';
import * as utils from '../src/utils/';

const theme = getTheme({
  palette: {
    primary: '#1a5a99',
    primaryBorder: '#bababa',
  },
});

describe('Slider', () => {
  test('should render a Slider', () => {
    const component = ReactTestRenderer.create(<Slider theme={theme} />);
    expect(component).toBeDefined();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have a input tag with type range', () => {
    const component = ReactTestRenderer.create(<Slider theme={theme} />).toJSON();
    expect(component.type).toEqual('input');
    expect(component.props.type).toEqual('range');
  });

  test('should be primary by default', () => {
    const spies = [
      jest.spyOn(utils, 'getBackgroundColor'),
      jest.spyOn(utils, 'getBorder'),
    ];
    const component = ReactTestRenderer.create(<Slider id="id" theme={theme} />).toJSON();
    spies.forEach(spy => expect(spy).toHaveBeenCalled());
    expect(component).toMatchSnapshot();
  });
});
