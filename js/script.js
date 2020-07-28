'use strict'
 let numberOfFilms = prompt('How mane films u watched?', '0')
 let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 }

 let a = prompt('what is the name of film?', ''),
     b = prompt('What rate you can do?', ''),
     c = prompt('what is the name of film?', ''),
     d = prompt('What rate you can do?', '');
 
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

    