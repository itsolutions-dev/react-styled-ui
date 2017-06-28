import { getBackgroundColor } from '../../src/utils/';

describe('getBackgroundColor', () => {
  const theme = {
    palette: {
      default: 'blue',
      primary: 'white',
      secondary: 'black',
    },
  };

  test('should get default', () => {
    expect(
      getBackgroundColor({
        theme,
      }),
    ).toEqual(theme.palette.default);
  });

  test('should get primary', () => {
    expect(
      getBackgroundColor({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primary);
  });

  test('should get secondary', () => {
    expect(
      getBackgroundColor({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondary);
  });

  test('should get from props', () => {
    expect(
      getBackgroundColor({
        backgroundColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
