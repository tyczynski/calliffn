# callIfFn.js [![npm version](https://badge.fury.io/js/calliffn.svg)](https://badge.fury.io/js/calliffn)

The method that call the passed argument if it is a function

## Usage

`callIfFn(function, ...args)`

## Example

```javascript
import callIfFn from 'calliffn';

const hello = (...args) => args.join(' ');

callIfFn(hello, 'Hello', 'World!'); // => 'Hello World!'
callIfFn(null) // => undefined
```

## License

[MIT](LICENSE) | [Przemysław Tyczyński](https://tyczynski.pl)
