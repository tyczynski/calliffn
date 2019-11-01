# calliffn [![npm version](https://badge.fury.io/js/calliffn.svg)](https://badge.fury.io/js/calliffn)

The method that call the passed argument if it is a function

## Usage

`calliffn(function, ...args)`

## Example

```javascript
import calliffn from 'calliffn';

const hello = (...args) => args.join(' ');

calliffn(hello, 'Hello', 'World!'); // => 'Hello World!'
calliffn(null) // => undefined
```

## License

[MIT](LICENSE) | [Przemysław Tyczyński](https://tyczynski.pl)
