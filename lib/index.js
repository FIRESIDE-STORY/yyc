const yy = require('../src/yy');
const vm = require('./vm');

const compile = (code) => {
  try {
    const context = yy.parse(code);
    console.log('contextcontext', context);

    return vm.runtime(context);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.compile = compile;
