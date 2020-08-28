declare function calliffn<T extends any[], R>(fn: (...args: T) => R, ...args: T): R | void;
export = calliffn;
