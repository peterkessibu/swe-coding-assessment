const reverseString = require('../solution_template');

test('Reverses a simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Handles empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Handles single character string', () => {
  expect(reverseString('a')).toBe('a');
});
