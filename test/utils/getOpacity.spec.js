import expect from 'expect';
import { getOpacity } from '../../src/utils/';

describe('getOpacity', () => {
  const disabledOpacity = 0.5;
  const defaultOpacity = 1;

  it('should get the default opacity', () => {
    expect(getOpacity({})).toEqual(defaultOpacity);
  });

  it('should get opacity for disabled component', () => {
    expect(getOpacity({ disabled: true })).toEqual(disabledOpacity);
  });

  it('should get opacity for readonly component', () => {
    expect(getOpacity({ readonly: true })).toEqual(disabledOpacity);
  });

  it('should get opacity from props', () => {
    expect(getOpacity({ opacity: 0.75 })).toEqual(0.75);
  });
});
