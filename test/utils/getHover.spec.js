import expect from 'expect';
import { getHover } from '../../src/utils/';

describe('getHover', () => {
  const theme = {
    palette: {
      defaultHover: 'blue',
      primaryHover: 'white',
      secondaryHover: 'black',
    },
  };

  it('should get default', () => {
    expect(
      getHover({
        theme,
      }),
    ).toEqual(theme.palette.defaultHover);
  });

  it('should get primary', () => {
    expect(
      getHover({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryHover);
  });

  it('should get secondary', () => {
    expect(
      getHover({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryHover);
  });

  it('should get from props', () => {
    expect(
      getHover({
        hoverColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
