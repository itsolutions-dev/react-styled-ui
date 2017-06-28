import getTheme from '../src/getTheme';
import defaultTheme from '../src/theme';

describe('getTheme', () => {
  test('should provide a merged theme', () => {
    const theme = { foo: 'bar' };
    const mergedTheme = getTheme(theme);
    expect(mergedTheme).toEqual({
      foo: 'bar',
      ...defaultTheme,
    });
  });
});
