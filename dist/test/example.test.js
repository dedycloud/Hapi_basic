"use strict";

var contoh = require('../example');

describe('contoh', function () {
  test('should return positif if parameter positive', function () {
    var result = contoh.contoh(1);
    expect(result).toBe(1);
  });
  test('should return positif if parameter negatif', function () {
    var result = contoh.contoh(-1);
    expect(result).toBe(1);
  });
  test('should return 0 if parameter 0', function () {
    var result = contoh.contoh(0);
    expect(result).toBe(0);
  });
});
describe('find location', function () {
  it('should return location', function () {
    var actual = contoh.getCustomer(); //too spesific

    expect(actual).toEqual({
      id: 1,
      username: "dedy"
    });
  });
  it('should return locations', function () {
    var actual = contoh.getCustomer(); //too spesific

    expect(actual).toMatchObject({
      id: 1,
      username: "dedy"
    });
  });
});