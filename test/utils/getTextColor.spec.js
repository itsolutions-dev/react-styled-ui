import expect from 'expect';
import { getTextColor } from '../../src/utils/';

describe('getTextColor', () => {
  const theme = {
    palette: {
      defaultText: 'blue',
      primaryText: 'white',
      secondaryText: 'black',
    },
  };

  it('should get default', () => {
    expect(
      getTextColor({
        theme,
      }),
    ).toEqual(theme.palette.defaultText);
  });

  it('should get primary', () => {
    expect(
      getTextColor({
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryText);
  });

  it('should get secondary', () => {
    expect(
      getTextColor({
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryText);
  });

  it('should get from props', () => {
    expect(
      getTextColor({
        textColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
