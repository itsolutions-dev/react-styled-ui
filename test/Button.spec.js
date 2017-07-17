import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import 'styled-components-test-utils/lib/jest';
import theme from '../src/theme';
import getTheme from '../src/getTheme';
import Button from '../src/Button';
import * as utils from '../src/utils/';

describe('Button', () => {
  test('should render a Button', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} />);
    expect(component).toBeDefined();
  });

  test('should have a button tag', () => {
    const component = ReactTestRenderer.create(<Button theme={theme} />).toJSON();
    expect(component.type).toEqual('button');
  });

  test('should have a background-color', () => {
    const spy = jest.spyOn(utils, 'getBackgroundColor');
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        backgroundColor="white"
      />,
    );
    expect(component).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a border', () => {
    const spy = jest.spyOn(utils, 'getBorder');
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        borderColor="white"
      />,
    );
    expect(component).toHaveStyleRule('border', '2px solid white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a color', () => {
    const spy = jest.spyOn(utils, 'getTextColor');
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        textColor="white"
      />,
    );
    expect(component).toHaveStyleRule('color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should have opacity', () => {
    const spy = jest.spyOn(utils, 'getOpacity');
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        opacity={0.75}
      />,
    );
    expect(component).toHaveStyleRule('opacity', '0.75');
    expect(spy).toHaveBeenCalled();
  });

  test('should have a background-color hover', () => {
    const spy = jest.spyOn(utils, 'getHover');
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        hoverColor="white"
      />,
    );
    expect({
      component,
      modifier: '&:hover',
    }).toHaveStyleRule('background-color', 'white');
    expect(spy).toHaveBeenCalled();
  });

  test('should be reversed', () => {
    const spies = [
      'getHover',
      'getTextColor',
      'getBackgroundColor',
      'getOpacity',
    ].map(x => jest.spyOn(utils, x));
    const component = ReactTestRenderer.create(
      <Button
        theme={getTheme({
          font: {
            size: 12,
          },
        })}
        hoverColor="red"
        textColor="green"
        backgroundColor="blue"
        reverse
      />,
    );
    expect(component).toHaveStyleRule('font-size', '12');
    expect(component).toHaveStyleRule('border', '0');
    expect(component).toHaveStyleRule('color', 'blue');
    expect(component).toHaveStyleRule('background-color', 'green');
    expect({
      component,
      modifier: '&:hover',
    }).toHaveStyleRule('color', 'red');
    spies.forEach((spy) => {
      expect(spy).toHaveBeenCalled();
    });
  });

  test('should have a radius', () => {
    const component = ReactTestRenderer.create(
      <Button
        theme={theme}
        radius={20}
      />,
    );
    expect(component).toHaveStyleRule('border-radius', '20px');
  });
});
