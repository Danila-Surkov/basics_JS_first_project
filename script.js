'use strict'
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
    while (numberOfFilms == "" || numberOfFilms.length > 50 || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const titleLastMovie = prompt("Один из последних просмотренных фильмов?", ''),
             gradeLastMovie = prompt("На сколько оцените его?", '');
         if (titleLastMovie != null && gradeLastMovie != null && titleLastMovie != '' && gradeLastMovie != '' && titleLastMovie.length < 50 && gradeLastMovie.length < 50 && titleLastMovie != ' ' && gradeLastMovie != ' '){
             personalMovieDB.movies[titleLastMovie] = gradeLastMovie;
             console.log("good");
         } else {
             console.log("BAD");
             i--;
         }  
     }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    }  else if (personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1, y = 0; i <= 3; i++, y++) {
        personalMovieDB.genres[y] = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
    }
}

writeYourGenres()

/*
let count = 0;
while (count < 2) {
    const titleLastMovie = prompt("Один из последних просмотренных фильмов?", ''),
         gradeLastMovie = prompt("На сколько оцените его?", '');
     if (titleLastMovie != null && gradeLastMovie != null && titleLastMovie != '' && gradeLastMovie != '' && titleLastMovie.length < 50 && gradeLastMovie.length < 50 && titleLastMovie != ' ' && gradeLastMovie != ' '){
         personalMovieDB.movies[titleLastMovie] = gradeLastMovie;
         console.log("good");
         count++;
     } else {
         console.log("BAD");
     }  
}
*/





    