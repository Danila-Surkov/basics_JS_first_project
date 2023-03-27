'use strict'


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == "" || personalMovieDB.count.length > 50 || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        }  else if (personalMovieDB.count <= 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },

    writeYourGenres: function() {
        
        for (let i = 1, y = 0; i <= 3; i++, y++) {
            while (personalMovieDB.genres[y] == ""  || personalMovieDB.genres[y] == null ){
                personalMovieDB.genres[y] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            } 
        }
        
        personalMovieDB.genres.forEach((element, i) => {
           console.log(`Любимый жанр #${i + 1} - это ${element}`); 
        });

    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();



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





    