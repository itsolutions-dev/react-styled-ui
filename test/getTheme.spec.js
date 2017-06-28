import expect from 'expect';
import getTheme from '../src/getTheme';

describe('getTheme', () => {
  it('should provide a merged theme', () => {
    const theme = { foo: 'bar' };
    const mergedTheme = getTheme(theme);
    expect(mergedTheme).toMatch({
      foo: 'bar',
      palette: {},
    });
  });
});
