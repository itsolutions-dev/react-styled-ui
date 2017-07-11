import { getHeight } from '../../src/utils/';

describe('getHeight', () => {
  const props = {
    theme: {
      dimensions: {
        height: {
          large: 3,
          medium: 2,
          small: 1,
        },
      },
    },
  };

  test('should get medium height by default', () => {
    expect(getHeight(props)).toEqual(2);
  });

  test('should get large height', () => {
    expect(getHeight({
      ...props,
      large: true,
    })).toEqual(3);
  });

  test('should get medium height', () => {
    expect(getHeight({
      ...props,
      medium: true,
    })).toEqual(2);
  });

  test('should get small height', () => {
    expect(getHeight({
      ...props,
      small: true,
    })).toEqual(1);
  });
});
