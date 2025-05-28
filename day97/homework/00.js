function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getDescription = function () {
    return `${this.brand} ${this.model}, ${this.year}`;
  };
}
const car1 = new Car("Toyota", "Corolla", 2015);
const car2 = new Car("BMW", "X5", 2020);
const car3 = new Car("Ford", "Mustang", 2018);

console.log(car1.getDescription()); 
console.log(car2.getDescription()); 
console.log(car3.getDescription());