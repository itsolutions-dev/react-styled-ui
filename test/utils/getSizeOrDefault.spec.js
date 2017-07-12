import { getSizeOrDefault } from '../../src/utils/';

describe('Avatar', () => {
  test('should handle string size', () => {
    const result = getSizeOrDefault('300px', '400px');
    expect(result).toEqual('300px');
  });

  test('should handle numeric size', () => {
    const result = getSizeOrDefault(300, '400px');
    expect(result).toEqual('300px');
  });
  test('should handle other types', () => {
    const result = getSizeOrDefault(undefined, '400px');
    expect(result).toEqual('400px');
  });
});
