import assert from './assert';

describe('assert', () => {
  test('throws on a false value', () => {
    expect(() => assert(false)).toThrow();
  });

  test('throws on a falsy value', () => {
    expect(() => assert(0)).toThrow();
    expect(() => assert('')).toThrow();
  });

  test('does not throw on a true value', () => {
    expect(() => assert(true)).not.toThrow();
  });

  test('Allows a message to be passed', () => {
    expect(() => assert(false, 'test message')).toThrow('test message');
  });
});
