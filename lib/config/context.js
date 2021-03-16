const assert = require('assert');
const { BaseClass } = require('../util');

const context = {
  require,
  exports,
  global,
  console,
  BaseClass,
  assert,
};

module.exports = context;
