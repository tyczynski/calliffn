const callIfFn = require('../src');

describe('callIfExists.js', () => {
  test('should be a function', () => {
    expect(callIfFn).toBeInstanceOf(Function);
  });

  test('should call the function correctly, add two numbers and return "5"', () => {
    const test = (n1, n2) => {
      return n1 + n2;
    };

    expect(callIfFn(test, 3, 2)).toBe(5);
  });

  test('should call the function correctly and return "success"', () => {
    const value = 'success';
    const test = () => {
      return value;
    };

    expect(callIfFn((test))).toBe(value);
  });

  test('should call the function correctly and return "Another success. Congratulations!"', () => {
    const words = ['Another', 'success.', 'Congratulations!'];
    const test = (...args) => {
      return args.join(' ');
    };

    expect(callIfFn(test, ...words)).toBe(words.join(' '));
  });

  test('should not call the passed argument and return undefined', () => {
    expect(callIfFn(null, 'ehh', 'it', 'is', 'null')).toBeUndefined();
    expect(callIfFn(2137, 'ups')).toBeUndefined();
    expect(callIfFn('yo', '!!')).toBeUndefined();
    expect(callIfFn(undefined)).toBeUndefined();
    expect(callIfFn(Symbol('cześć'))).toBeUndefined();
    expect(callIfFn({})).toBeUndefined();
    expect(callIfFn([])).toBeUndefined();
    expect(callIfFn((() => 'it\'t a trap!')())).toBeUndefined();
    expect(callIfFn(new Set())).toBeUndefined();
    expect(callIfFn(new Map())).toBeUndefined();
    expect(callIfFn(false)).toBeUndefined();
    expect(callIfFn(false)).toBeUndefined();
  });
});

