const { union } = require('../src/index');

test('it should union two sets', () => {
  expect(union([3, 8, 7, 16, 10, 15], [1, 2, 8, 10, 15])).toEqual(expect.arrayContaining([1, 2, 3, 7, 8, 10, 15, 16]));
});