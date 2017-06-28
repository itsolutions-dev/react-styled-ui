import { getProperty } from '../../src/utils/';

describe('getProperty', () => {
  const theme = {
    palette: {
      defaultText: 'blue',
      primaryText: 'white',
      secondaryText: 'black',
    },
  };

  test('should get default', () => {
    expect(
      getProperty('Text', {
        theme,
      }),
    ).toEqual(theme.palette.defaultText);
  });

  test('should get primary', () => {
    expect(
      getProperty('Text', {
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryText);
  });

  test('should get secondary', () => {
    expect(
      getProperty('Text', {
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryText);
  });

  test('should get from props', () => {
    expect(
      getProperty('Text', {
        textColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
