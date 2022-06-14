"use strict";
const numberOfFilms = prompt("Сколько вы фильмов посмотрели?"),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };
const a = prompt("Один из последних фильмов?"),
  b = prompt("Как его оцените?"),
  c = prompt("Один из последних фильмов?"),
  d = prompt("Как его оцените?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
