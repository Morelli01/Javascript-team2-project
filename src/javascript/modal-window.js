import axios from 'axios';
import { round } from './utils';
import { onClickFilm, favoriteArr } from './local_storage';

const addBtnLib = document.querySelector('.js_add_collection');


console.log(document.readyState);

document.addEventListener('click', function (e) {
    if (
        e.target.classList.contains('list_item') ||
        e.target.closest('.list_item')
    ) {
        initModal();
    }
});

function initModal() {
    const movieImages = document.querySelectorAll('[data-film-id]');
    console.log(1, movieImages);
    movieImages.forEach(image => {
        image.addEventListener('click', () => {
            const movieId = image.dataset.filmId;
            console.log(image.dataset);
            openModal(movieId);
        });
    });

    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    const movieTitle = document.querySelector('.modal-title-movie');
    const movieDetails = document.querySelector('.movie-details table tbody');
    const movieOverview = document.querySelector('.about-text');
    const moviePoster = document.querySelector('.modal-poster');
    const movieDiv = document.querySelector('.more-details');

    const openModal = movieId => {
        const apiKey = '97fe01addf81f73693338979426ece1e';
        const baseUrl = 'https://api.themoviedb.org/3';
        const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;

        axios
            .get(url)
            .then(response => {
                const id = response.data.id;
                const data = response.data;
                const title = data.title;
                const voteCount = data.vote_count;
                const voteAverage = data.vote_average;
                const popularity = data.popularity;
                const genre = data.genres[0].name;
                const overview = data.overview;
                const posterPath = data.poster_path;
                const posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;

                const inStorage = favoriteArr.some(film => film.id === id);
                addBtnLib.textContent = inStorage
                    ? 'Remove from my library'
                    : 'Add to my library';
                movieTitle.textContent = title;
                movieDiv.dataset.id = `${id}`;
                movieDetails.innerHTML = `
<div class='film-month_info-item'>
            <span class='film-month_info-label'>Vote/Votes</span>
            <span class='film-month_info-value'>
              <span class='value-number'>${voteAverage}</span>
               <span class='value-separator'>/</span>
              <span class='value-number'>${voteCount}</span>
            </span>
          </div>
          <div class='film-month_info-item'>
            <span class='film-month_info-label'>Popularity</span>
            <span class='film-month_info-value span-value'>${round(
                    popularity,
                    10
                )}</span>
          </div>
          <div class='film-month_info-item'>
            <span class='film-month_info-label'>Genre</span>
            <span class='film-month_info-value span-value'>${genre}</span>
          </div>
        </div>
          `;
                movieOverview.textContent = overview;
                moviePoster.setAttribute('src', posterUrl);

                modal.style.display = 'flex';
            })
            .catch(error => {
                console.error('Error getting movie information:', error);
            });
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    const closeButton = modal.querySelector('.modal-close-btn');
    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });



    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

addBtnLib.addEventListener('click', onClickFilm);
