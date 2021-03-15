const helper = require('./helper');

const operators = {
  add: (a, b) => `${a} + ${b}`,
  subtract: (a, b) => `${a} - ${b}`,
  divide: (a, b) => `${a} / ${b}`,
  multiply: (a, b) => `${a} * ${b}`,

  lt: (a, b) => `${a} < ${b}`,
  lte: (a, b) => `${a} <= ${b}`,

  gt: (a, b) => `${a} > ${b}`,
  gte: (a, b) => `${a} >= ${b}`,

  eq: (a, b) => `${a} === ${b}`,
  ne: (a, b) => `${a} !== ${b}`,
  or: (a, b) => `${a} || ${b}`,
  and: (a, b) => `${a} && ${b}`,
  not: (a) => !a,

  assign: (a, b) => (a = b),
};

module.exports = operators;
