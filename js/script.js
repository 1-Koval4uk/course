/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';
document.addEventListener('DOMContentLoaded', () => {
    //Announced main DB
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    //Announced all variables
    const img = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          input = form.querySelector('.adding__input'),
          checkForm = document.querySelector('[type="checkbox"]');
    
    
    function deleteAdv(adv){
        //Removed all ads posts
        adv.forEach(item => {
            item.remove();
        });
    }


    function makeChanges(){
        //Changed all genres
        genre.textContent = 'Драма';
        
        //Change old background on new
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    
    function arrSort(arr){
        //Sorted movies's massive
        arr.sort();
    }

    
    //Add new film in the list by button's click
    form.addEventListener('submit', (event) => {
        let newFilm = input.value;
        let favorite = checkForm.checked;

        //Disable restart of page
        event.preventDefault();
        if(newFilm){
            //Limit number of words in input
            if(newFilm.length > 21){
                //Method 'substring' allow add text with limited number of word
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            //Use checkbox for action
            if(favorite){
                console.log('Add favorite film');
            }
    
            //Add value from input in array
            movieDB.movies.push(newFilm);
    
            //Sorted movie's array
            arrSort(movieDB.movies);


            //Use function createMovieList for add new film in the list
            createMovieList(movieDB.movies, movieList);  
            
            //Just a check
            console.log(movieDB.movies);
        }


        form.reset();
    })
    

    function createMovieList(films, parent){
        //Deleted all html text on the page
        parent.innerHTML = "";


        //Added html to the page from massive
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                                    <div class="delete"></div>
                                </li>`
        });

        //Use trash button for deleting list item
        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            })
        })
    }

    //Activate function
    deleteAdv(img);
    makeChanges();
    arrSort(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
})





