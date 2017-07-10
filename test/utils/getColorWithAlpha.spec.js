import { getColorWithAlpha } from '../../src/utils/';

describe('getColorWithAlpha', () => {
  test('should get color with alpha', () => {
    const color = getColorWithAlpha('#11C1B9', 0.75);
    expect(color).toEqual('rgba(17, 193, 185, 0.75)');
  });
});
