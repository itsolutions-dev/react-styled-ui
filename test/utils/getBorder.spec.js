import expect from 'expect';
import { getBorder } from '../../src/utils/';

describe('getBorder', () => {
  const theme = {
    palette: {
      defaultBorder: 'blue',
      primaryBorder: 'white',
      secondaryBorder: 'black',
    },
  };

  it('should get default', () => {
    expect(
      getBorder({
        theme,
      }),
    ).toEqual(theme.palette.defaultBorder);
  });

  it('should get primary', () => {
    expect(
      getBorder({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryBorder);
  });

  it('should get secondary', () => {
    expect(
      getBorder({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryBorder);
  });

  it('should get from props', () => {
    expect(
      getBorder({
        borderColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
