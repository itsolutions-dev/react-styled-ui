import expect from 'expect';
import deepMerge from '../src/deepMerge';

describe('deepMerge', () => {
  const master = {
    foo: 'foo',
    bar: 'bar',
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

  it('should add unknown props', () => {
    expect(
      deepMerge(master, {
        example: 'example',
      }),
    ).toEqual({
      example: 'example',
      ...master,
    });
  });

  it('should overwrite existing props', () => {
    expect(
      deepMerge(master, {
        foo: 'oof',
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
});
