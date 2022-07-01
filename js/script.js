"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms = prompt("Сколько вы фильмов посмотрели?");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt("Сколько вы фильмов посмотрели?");
    }
  },
  detectPersLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы средний зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних фильмов?"),
        b = prompt("Как его оцените?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        console.log("Проверка пройдена");
        personalMovieDB.movies[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
  },
  toggleVisibleMyDB: function (a) {
    if (a == false) {
      a = true;
    } else {
      a = false;
    }
  },
};

personalMovieDB.start();

personalMovieDB.detectPersLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB();

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log("done");
