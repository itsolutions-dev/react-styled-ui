import expect from 'expect';
import { getProperty } from '../../src/utils/';

describe('getProperty', () => {
  const theme = {
    palette: {
      defaultText: 'blue',
      primaryText: 'white',
      secondaryText: 'black',
    },
  };

  it('should get default', () => {
    expect(
      getProperty('Text', {
        theme,
      }),
    ).toEqual(theme.palette.defaultText);
  });

  it('should get primary', () => {
    expect(
      getProperty('Text', {
        primary: true,
        theme,
      }),
    ).toEqual(theme.palette.primaryText);
  });

  it('should get secondary', () => {
    expect(
      getProperty('Text', {
        secondary: true,
        theme,
      }),
    ).toEqual(theme.palette.secondaryText);
  });

  it('should get from props', () => {
    expect(
      getProperty('Text', {
        textColor: 'yellow',
        theme,
      }),
    ).toEqual('yellow');
  });
});
