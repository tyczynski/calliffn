const calliffn = require('../src/index');

describe('calliffn', () => {
  test('should be a function', () => {
    expect(calliffn).toBeInstanceOf(Function);
  });

  test('should call the function correctly, add two numbers and return "5"', () => {
    const test = (n1, n2) => {
      return n1 + n2;
    };

    expect(calliffn(test, 3, 2)).toBe(5);
  });

  test('should call the function correctly and return "success"', () => {
    const value = 'success';
    const test = () => {
      return value;
    };

    expect(calliffn((test))).toBe(value);
  });

  test('should call the function correctly and return "Another success. Congratulations!"', () => {
    const words = ['Another', 'success.', 'Congratulations!'];
    const test = (...args) => {
      return args.join(' ');
    };

    expect(calliffn(test, ...words)).toBe(words.join(' '));
  });

  test('should not call the passed argument and return undefined', () => {
    expect(calliffn(null, 'ehh', 'it', 'is', 'null')).toBeUndefined();
    expect(calliffn(2137, 'ups')).toBeUndefined();
    expect(calliffn('yo', '!!')).toBeUndefined();
    expect(calliffn(undefined)).toBeUndefined();
    expect(calliffn(Symbol('cześć'))).toBeUndefined();
    expect(calliffn({})).toBeUndefined();
    expect(calliffn([])).toBeUndefined();
    expect(calliffn((() => 'it\'t a trap!')())).toBeUndefined();
    expect(calliffn(new Set())).toBeUndefined();
    expect(calliffn(new Map())).toBeUndefined();
    expect(calliffn(false)).toBeUndefined();
    expect(calliffn(false)).toBeUndefined();
  });
});

