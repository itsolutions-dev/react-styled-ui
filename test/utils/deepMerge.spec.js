import { deepMerge } from '../../src/utils/';

describe('deepMerge', () => {
  const master = {
    foo: 'foo',
    bar: 'bar',
    arr: [1, 2, 3],
    baz: {
      foo: 'foo',
      bar: 'bar',
      baz: {
        foo: 'foo',
        bar: 'bar',
        baz: 42,
      },
    },
  };

  test('should add unknown props', () => {
    expect(
      deepMerge(master, {
        example: 'example',
      }),
    ).toEqual({
      example: 'example',
      ...master,
    });
  });

  test('should overwrite existing props', () => {
    expect(
      deepMerge(master, {
        foo: 'oof',
        arr: [0, 1, 2],
        baz: {
          bar: 'rab',
          baz: {
            baz: '42',
          },
        },
      }),
    ).toEqual({
      foo: 'oof',
      bar: 'bar',
      arr: [0, 1, 2],
      baz: {
        foo: 'foo',
        bar: 'rab',
        baz: {
          foo: 'foo',
          bar: 'bar',
          baz: '42',
        },
      },
    });
  });

  test('should preserve equal properties', () => {
    expect(
      deepMerge(master, {
        foo: 'foo',
      }),
    ).toEqual(master);
  });
});
