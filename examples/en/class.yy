class Person {
  getName() {
    return this
  }

  setName(name) {
    this.name = name
  }
}

const person = Person.new()
person.setName("tom")
person.getName()