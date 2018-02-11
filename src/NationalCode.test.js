import nationalCode from './NationalCode';

describe('National code validation test', () => {
  test('should return true', () => {
    expect(nationalCode(4160086731)).toBe(true);
  });

  test('should return false', () => {
    expect(nationalCode(4160086732)).toBe(false);
  });

  test('should return true', () => {
    expect(nationalCode(4839941637)).toBe(true);
  });

  test('should return true', () => {
    expect(nationalCode('4839941637')).toBe(true);
  });

  test('should return false', () => {
    expect(nationalCode(8888888888)).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode(6838473293)).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode('6838473293')).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode()).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode(1234567542, '8364830361')).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode(['1234873683'])).toBe(false);
  });

  test('should return false', () => {
    expect(nationalCode(123456723542)).toBe(false);
  });
});
