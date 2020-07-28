'use strict'
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/



let numberOfFilms = prompt('How many films u watched?', '0')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 0; i < 2; i++){
    let a = prompt('what is the name of film?', '');
    let b = prompt('What rate you can do?', '');
        if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
        }else{
            console.log('You got error')
            i--;
        }
}
if(personalMovieDB.count < 10){
    alert('watched few films')
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert('You are basic viewer')
}else{
    alert('You are movie fun')
}
console.log(personalMovieDB);