let genres = new Set();
films.forEach(film => film.genre.forEach(genre => genres.add(genre) ) );

for (let g of genres)
    document.getElementById('list').innerHTML += `<li><input class="genre" type="checkbox" onchange="refreshList()" value="${g}"><lable>${g}</lable></li>`;

function refreshList(){
    let filmsContainer = document.getElementById('films-container');

    while (filmsContainer.firstChild)
        filmsContainer.removeChild(filmsContainer.firstChild);

    let chosenGenres = Array.from(document.getElementsByClassName('genre'))
        .filter(input => input.checked).map(input => input.value);

    let chosenFilms = films.filter(film => chosenGenres.every(genre => film.genre.includes(genre) ) )

    chosenFilms.forEach(film => {
        let div = document.createElement('div');

        div.className = 'film-cell'
        div.innerHTML = `
            <a href="${film.link}" target="_blank">
                <img class="movie-img" src="${film.img}" alt="movie's cover">
            </a>
            <p class="film-name">${film.name}</p>
            <p class="film-year">${film.year}</p>
            <p>${film.producer.join(', ')}</p>
        `;

        let innerDiv = document.createElement('div');
        innerDiv.className = 'inner-div';

        film.genre.forEach( g => innerDiv.innerHTML += `<span class="span-genre">${g}</span>` );

        div.append(innerDiv);
        filmsContainer.append(div);
    });

    document.getElementById('amountOfChosen').innerText = 'Найдено ' + chosenFilms.length + ' фильмов.';
}

refreshList();




