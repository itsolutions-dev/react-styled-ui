import { guid } from '../../src/utils/';

describe('guid', () => {
  const guidValidator = /(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})/;

  test('should generate a guid', () => {
    const id = guid();
    expect(typeof id).toEqual('string');
    expect(guidValidator.test(id)).toBeTruthy();
  });

  test('should generate different guid', () => {
    const ids = [...Array(1000).keys()].map(guid);
    const someEqual = ids.reduce((equals, id, idx) => {
      if (equals === true || idx === ids.length - 1) return equals;
      return ids.slice(idx + 1).some(x => x === id);
    }, false);
    expect(someEqual).toBeFalsy();
  });
});
