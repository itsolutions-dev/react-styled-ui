import expect from 'expect';
import { getBackgroundColor } from '../../src/utils/';

describe('getBackgroundColor', () => {
  const theme = {
    palette: {
      default: 'blue',
      primary: 'white',
      secondary: 'black',
    },
  };

  it('should get default', () => {
    expect(
      getBackgroundColor({
        theme,
      }),
    ).toEqual(theme.palette.default);
  });

  it('should get primary', () => {
    expect(
      getBackgroundColor({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primary);
  });

  it('should get secondary', () => {
    expect(
      getBackgroundColor({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondary);
  });

  it('should get from props', () => {
    expect(
      getBackgroundColor({
        backgroundColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
