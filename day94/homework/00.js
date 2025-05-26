// ობიექტი არის მონაცემების ერთიანი ერთეული, რომელიც შეიცავს კუთვნილებებს და ფუნქციებს (მეთოდებს).
// კუთვნილება (property) არის ობიექტის ცალკეული მახასიათებელი, როგორიცაა სახელი, გვარი და ასაკი.
// მეთოდი (method) არის ფუნქცია, რომელიც განსაზღვრულია ობიექტის შიგნით.

// ობიექტები
const me = {
  name: "Amy",
  surname: "Smith",
  age: 25
};

const sister = {
  name: "Emily",
  surname: "Smith",
  age: 22
};


console.log(me);
console.log(sister);


console.log(me.name);
console.log(me.surname);
console.log(me.age);

console.log(sister.name);
console.log(sister.surname);
console.log(sister.age);


me.age = 26;
sister.name = "Emma";

console.log(me);
console.log(sister);


me.hobby = "reading";
sister.hobby = "painting";

console.log(me);
console.log(sister);

delete me.surname;
delete sister.age;

console.log(me);
console.log(sister);


const userName = prompt("შეიყვანეთ თქვენი სახელი:");
const userSurname = prompt("შეიყვანეთ თქვენი გვარი:");
const userAge = prompt("შეიყვანეთ თქვენი ასაკი:");


const user = {
  name: userName,
  surname: userSurname,
  age: userAge
};

console.log(user);


user.name = "გარდაქმნილი სახელი";


console.log(user);