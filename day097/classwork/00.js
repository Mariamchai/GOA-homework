function Movie(name, genre, year, imdb, review) {
  this.name = name;
  this.genre = genre;
  this.year = year;
  this.imdb = imdb;
  this.review = review;

  this.getDescription = function () {
    return `film "${this.name}" (${this.year}), genre: ${this.genre}. IMDb: ${this.imdb} review: ${this.review}`;
  };
}

const movie1 = new Movie("Inception", "Sci-Fi", 2010, 8.8,4.5);
console.log(movie1.getDescription());
