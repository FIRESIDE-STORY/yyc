const assert = require('assert');
const os = require('os');

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
