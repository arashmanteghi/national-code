'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('National code validation test', function () {
  test('should return true', function () {
    expect((0, _index2.default)(4160086731)).toBe(true);
  });

  test('should return false', function () {
    expect((0, _index2.default)(4160086732)).toBe(false);
  });

  test('should return true', function () {
    expect((0, _index2.default)(4839941637)).toBe(true);
  });

  test('should return true', function () {
    expect((0, _index2.default)('4839941637')).toBe(true);
  });

  test('should return false', function () {
    expect((0, _index2.default)(8888888888)).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)(6838473293)).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)('6838473293')).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)()).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)(1234567542, '8364830361')).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)(['1234873683'])).toBe(false);
  });

  test('should return false', function () {
    expect((0, _index2.default)(123456723542)).toBe(false);
  });
});