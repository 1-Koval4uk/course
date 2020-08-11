// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/
'use strict';
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How many films u watched?', '0');
    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null){
        numberOfFilms = +prompt('How many films u watched?', '0');
    }
}
start();



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let a = prompt('what is the name of film?', '');
        let b = prompt('What rate you can do?', '');
            if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
                personalMovieDB.movies[a] = b;
            }else{
                console.log('You got error');
                i--;
            }
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('watched few films');
    }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('You are basic viewer');
    }else{
        alert('You are movie fun');
    }
}
detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }else{}
}
showMyDB(); //My variant 

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }else{}
// }
// showMyDB(personalMovieDB.privat);  //---Variant from video

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        let yourGenres = prompt(`Your favorite genre have a number ${i}`);
        personalMovieDB.genres[i - 1] = yourGenres;
    }
}
writeYourGenres();