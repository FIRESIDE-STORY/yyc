const hasKey = (value, key) => (typeof value === 'object' ? Reflect.has(value, key) : false);
const isFn = (value) => typeof value === 'function';
const isArray = (value) => Array.isArray(value);

module.exports.hasKey = hasKey;
module.exports.isFn = isFn;
module.exports.isArray = isArray;
