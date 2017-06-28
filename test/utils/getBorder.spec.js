import { getBorder } from '../../src/utils/';

describe('getBorder', () => {
  const theme = {
    palette: {
      defaultBorder: 'blue',
      primaryBorder: 'white',
      secondaryBorder: 'black',
    },
  };

  test('should get default', () => {
    expect(
      getBorder({
        theme,
      }),
    ).toEqual(theme.palette.defaultBorder);
  });

  test('should get primary', () => {
    expect(
      getBorder({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryBorder);
  });

  test('should get secondary', () => {
    expect(
      getBorder({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryBorder);
  });

  test('should get from props', () => {
    expect(
      getBorder({
        borderColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
