'use strict';
import { getFilms, getGenres, getCategoriesQuery } from './api';
import { createPagination } from './pagination';
import { round } from './utils';
import { onClickFilm, favoriteArr } from './local_storage'; //*-------

const refs = {
  ulEl: document.querySelector('.search_film_list'),
  inputEl: document.querySelector('.search_film_input'),
  divPagination: document.getElementById('pagination'),
  form: document.getElementById('form'),
  btnReset: document.querySelector('.btn_reset'),
  toTop: document.querySelector('.to_top'),
  falseResultMessage: document.querySelector('.cards__message'),
};

let categories = {};
let currentPage = 1;
let searchQuery = '';

getGenres()
  .then(res => {
    res.forEach(({ id, name }) => {
      categories[id] = name;
    });
    return getFilms(currentPage);
  })
  .then(categoriesData => {
    markupFilm(categoriesData.results);
    paginationTrendWeek(categoriesData);
  })
  .catch(Error);

function markupFilm(data) {
  const markup = data
    .map(
      ({
        id,
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        first_air_date,
      }) => {
        let url = poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
        const year = yearsFilm(release_date, first_air_date);
        let genre = categoriesFilms(genre_ids);
        const inStorage = favoriteArr.some(film => film.id === id); //*-------
        const buttonText = inStorage ? 'Remove from my library' : 'Add to my library';  //*-------
        return `<li class='weekly_trends_list_item' data-id='${id}'>
        <img class='movie-image' src='${url}' alt=''>
        <div class='weekly-trends_description'>
          <div class='flex-wrap'>
            <h4 class='film_title'>${original_title}</h4>
            <div class='flex-wrap-rating'>
            <h5 class='film_description'>${genre}<span class='separator'>|</span>${year}</h5>
            <div class='film_rating-wrapper'>
                          <div class='film_rating' style='--rating: ${
                            vote_average / 2
                          };' aria-label='Rating of this film is ${round(
          vote_average / 2,
          10
        )} out of 5.'></div>
            </div>
          </div>
          <button type="button" class="js_add_collection" data-id="${id}">${buttonText}</button> //*-------
          </div>
        </div>
      </li>`;
      }
    )
    .join('');
  refs.ulEl.innerHTML = markup;
}

refs.ulEl.addEventListener('click', onClickFilm); //*-------

function categoriesFilms(genreIds) {
  let categoriesFilm = [];
  if (typeof genreIds !== 'undefined') {
    categoriesFilm = genreIds
      .filter(genre => typeof genre !== 'undefined')
      .map(genre => {
        if (!categories[genre]) {
          return 'Film';
        }
        return categories[genre];
      });
  }
  if (categoriesFilm.length > 2) {
    categoriesFilm = categoriesFilm.slice(0, 2);
  }
  if (categoriesFilm.length === 0) {
    return 'Film';
  }
  return categoriesFilm.join(', ');
}

function yearsFilm(release_date, first_air_date) {
  const year =
    typeof release_date !== 'undefined'
      ? release_date.split('-')[0]
      : typeof first_air_date !== 'undefined'
      ? first_air_date.split('-')[0]
      : '';
  return year;
}

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(ev) {
  ev.preventDefault();
  currentPage = 1;
  searchQuery = ev.currentTarget.elements.film_name.value.trim();
  refs.divPagination.classList.add('display-hidden');
  refs.falseResultMessage.classList.add('display-hidden');

  if (searchQuery.length >= 1) {
    refs.btnReset.classList.remove('is-hidden');
  }

  const response = await getCategoriesQuery(searchQuery, currentPage);
  refs.ulEl.innerHTML = '';

  markupFilm(response.results);
  paginationSearchFilms(response);
  addFalseResultText(response);
}

function paginationTrendWeek(response) {
  if (response.total_results > 20) {
    refs.divPagination.classList.remove('display-hidden');

    const pagination = createPagination(
      response.total_results,
      response.total_pages
    );

    pagination.on('afterMove', event => {
      currentPage = event.page;
      getFilms(currentPage)
        .then(data => {
          markupFilm(data.results);
          window.scrollTo({
            top: 450,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  }
}

function paginationSearchFilms(response) {
  if (response.total_results > 20) {
    refs.divPagination.classList.remove('display-hidden');

    const pagination = createPagination(
      response.total_results,
      response.total_pages
    );

    pagination.on('afterMove', event => {
      currentPage = event.page;
      getCategoriesQuery(searchQuery, currentPage)
        .then(data => {
          markupFilm(data.results);
          window.scrollTo({
            top: 450,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  }
}

function addFalseResultText(response) {
  if (response.total_results === 0) {
    refs.falseResultMessage.classList.remove('display-hidden');
  }
}

refs.btnReset.addEventListener('click', () => {
  refs.btnReset.classList.add('is-hidden');
  refs.form.reset();
});

function Error(err) {
  console.log(err);
}
