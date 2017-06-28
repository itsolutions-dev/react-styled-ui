import { getTextColor } from '../../src/utils/';

describe('getTextColor', () => {
  const theme = {
    palette: {
      defaultText: 'blue',
      primaryText: 'white',
      secondaryText: 'black',
    },
  };

  test('should get default', () => {
    expect(
      getTextColor({
        theme,
      }),
    ).toEqual(theme.palette.defaultText);
  });

  test('should get primary', () => {
    expect(
      getTextColor({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryText);
  });

  test('should get secondary', () => {
    expect(
      getTextColor({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryText);
  });

  test('should get from props', () => {
    expect(
      getTextColor({
        textColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
