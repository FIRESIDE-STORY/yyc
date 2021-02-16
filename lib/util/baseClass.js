class BaseClass {
  static 基态() {
    const CurrentClass = this;
    return new CurrentClass(...arguments);
  }

  static new() {
    const CurrentClass = this;
    return new CurrentClass(...arguments);
  }
}

module.exports = BaseClass;
