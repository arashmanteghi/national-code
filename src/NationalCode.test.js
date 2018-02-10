import nationalCode from './NationalCode';

describe('National code validation test', () => {
  test('should return  true', () => {
    expect(nationalCode(4839941637)).toBe(true);
  });

  test('should return  true', () => {
    expect(nationalCode('4839941637')).toBe(true);
  });

  test('should return  false', () => {
    expect(nationalCode(8888888888)).toBe(false);
  });

  test('should return  false', () => {
    expect(nationalCode(6838473293)).toBe(false);
  });

  test('should return  false', () => {
    expect(nationalCode('6838473293')).toBe(false);
  });
});
