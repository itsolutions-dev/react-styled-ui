import { getHover } from '../../src/utils/';

describe('getHover', () => {
  const theme = {
    palette: {
      defaultHover: 'blue',
      primaryHover: 'white',
      secondaryHover: 'black',
    },
  };

  test('should get default', () => {
    expect(
      getHover({
        theme,
      }),
    ).toEqual(theme.palette.defaultHover);
  });

  test('should get primary', () => {
    expect(
      getHover({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryHover);
  });

  test('should get secondary', () => {
    expect(
      getHover({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryHover);
  });

  test('should get from props', () => {
    expect(
      getHover({
        hoverColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
