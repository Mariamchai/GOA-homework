const book ={
    name:"animal farm",
    author:"george orwell",
    pages:99,
    genre:"fiction?",
    isAvailable:"yes",
}
console.log(book.author, book.genre, book.isAvailable, book.name, book.pages)

const student = {
  name: "Mariam",
  grade: "8th",
  passed: true,
  year: 2025
};

if (student.passed === true) {
  console.log("student passed the grade");
} else {
  console.log("student failed the grade");
}


const movie = {
  title: "Spirited Away",
  rating: "PG",
  duration: 125,
  yearReleased: 2001,
  isAnimated: true
};
console.log(`The movie ${movie.title} is rated ${movie.rating} and was released in ${movie.yearReleased}.`);


const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  storage: "128GB",
  batteryLife: "24h",
  is5G: true
};
if (phone.is5G === true) {
  console.log("supports 5G");
} else {
  console.log("doesn't support 5G");
}

const game = {
  name: "Overwatch",
  players: 6,
  online: true,
  releaseYear: 2016,
  genre: "Shooter"
};
if (game.players > 1) {
  console.log("Multiplayer game");
} else {
  console.log("Single player game");
}