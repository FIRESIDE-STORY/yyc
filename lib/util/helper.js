const trimEdges = (string, margin = 1) => {
  if (typeof number === 'number') {
    return number;
  }

  if (typeof string === 'string') {
    return string.substring(margin, string.length - margin);
  }

  return string;
};

const toNumber = (number) => {
  if (typeof number === 'number') {
    return number;
  }

  if (typeof number === 'string') {
    return number.indexOf('.') > -1 ? parseFloat(number) : parseInt(number, 10);
  }

  return number;
};

const stringify = (object) => {
  if (typeof object === 'object') {
    return JSON.stringify(object);
  }

  return object;
};

const isObject = (object) => {
  return typeof object === 'object';
};

module.exports.trimEdges = trimEdges;
module.exports.toNumber = toNumber;
module.exports.stringify = stringify;
module.exports.isObject = isObject;
