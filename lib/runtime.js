const vm = require('vm');
const context = require('./config/context');

const runInContext = (code) => {
  const script = new vm.Script(code);
  vm.createContext(context);

  return script.runInContext(context);
};

module.exports = runInContext;
