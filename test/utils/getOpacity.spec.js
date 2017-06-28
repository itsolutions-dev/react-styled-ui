import { getOpacity } from '../../src/utils/';

describe('getOpacity', () => {
  const disabledOpacity = 0.5;
  const defaultOpacity = 1;

  test('should get the default opacity', () => {
    expect(getOpacity({})).toEqual(defaultOpacity);
  });

  test('should get opacity for disabled component', () => {
    expect(getOpacity({ disabled: true })).toEqual(disabledOpacity);
  });

  test('should get opacity for readonly component', () => {
    expect(getOpacity({ readonly: true })).toEqual(disabledOpacity);
  });

  test('should get opacity from props', () => {
    expect(getOpacity({ opacity: 0.75 })).toEqual(0.75);
  });
});
