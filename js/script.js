"use strict";
const numberOfFilms = prompt("Сколько вы фильмов посмотрели?"),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы средний зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

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

//
//

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log("done");
