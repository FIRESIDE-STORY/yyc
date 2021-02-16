class Person {
  getName(name) {
    print(name)
    print(this)
  }
}

const person = Person.new("tom")
person.getName("tom")