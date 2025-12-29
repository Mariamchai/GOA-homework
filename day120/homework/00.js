class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }}

class Animal extends Human {
  constructor(name, age, catName) {
    super(name, age);
    this.cat = new Cat(catName);
  }}

class Cat {
  constructor(catName) {
    this.catName = catName;
  }}
