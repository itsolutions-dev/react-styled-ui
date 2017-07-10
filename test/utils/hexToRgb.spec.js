import { hexToRgb } from '../../src/utils/';

describe('hexToRgb', () => {
  test('should convert hex to Rgb', () => {
    const rgb = hexToRgb('#11C1B9');
    expect(rgb.r).toEqual(17);
    expect(rgb.g).toEqual(193);
    expect(rgb.b).toEqual(185);
  });

  test('should return null for invalid hex', () => {
    const rgb = hexToRgb('white');
    expect(rgb).toEqual(null);
  });
});
