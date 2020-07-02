declare function calliffn<T, R>(fn: (...T: any[]) => R, ...args: T[]): R | void;
export = calliffn;
