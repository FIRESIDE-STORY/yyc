const validators = require('./validators');
class BaseClass {
  static 基态() {
    const CurrentClass = this;
    const instance = new CurrentClass();

    if (validators.hasKey(instance, '基态')) {
      instance.基态(...arguments);
    }

    return instance;
  }

  static new() {
    const CurrentClass = this;
    const instance = new CurrentClass();

    if (validators.hasKey(instance, 'new')) {
      instance.new(...arguments);
    }

    return instance;
  }
}

module.exports = BaseClass;
