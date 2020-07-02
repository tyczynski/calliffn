/**
 * Call the argument if it is a function
 *
 * @param fn - argument to be called
 * @param args - zero or more arguments
 */
module.exports = (fn, ...args) => {
  if (typeof fn === 'function') {
    return fn(...args);
  }
};
