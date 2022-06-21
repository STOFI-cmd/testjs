"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько вы фильмов посмотрели?");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько вы фильмов посмотрели?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы средний зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersLevel();

function rememberMyFilms() {
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
}

rememberMyFilms();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
  }
}

writeYourGenres();

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log("done");

