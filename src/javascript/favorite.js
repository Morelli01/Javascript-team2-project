import { getGenres } from './api';
import { round } from './utils';

const KEY_FAVORITE = 'favorite';

const list = document.querySelector('.search_film_list');
const librarySection = document.querySelector('.library-section');
const errorSectoin = document.querySelector('.error-section');
const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

getGenres()
  .then(res => {
    res.forEach(({ id, name }) => {
      categories[id] = name;
    });
  })
  .catch(Error);

function markupFilm(favorite) {
  const markup = favorite
    .map(
      ({
        poster_path,
        original_name,
        original_title,
        genres,
        release_date,
        vote_average,
        first_air_date,
        id,
      }) => {
        let url = poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
        const year = yearsFilm(release_date, first_air_date);
        let genre = categoriesFilms(genres);
        return `<li class="search_film_img_wrap movie-image list_item" data-film-id='${id}'>
        <img loading="lazy" src="${url}" alt="${
          original_name || original_title
        }" width="395" height="574" class="search_film_img"/>
        <div class="wrap">
          <div class="search_film_wrap">
            <p class="search_film_title">${original_name || original_title}</p>
            <p class="search_film_genre">${genre} | ${year}</p> 
            <div class="stars">
            <div class='film_rating-wrapper'>
              <div class='film_rating' style='--rating: ${
                vote_average / 2
              };' aria-label='Rating of this film is ${round(
          vote_average / 2,
          10
        )} out of 5.'></div>
            </div>
         </div>
          </div>
        </div>
      </li>`;
      }
    )
    .join('');
  list.innerHTML = markup;
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

function categoriesFilms(genreIds) {
  let categoriesFilm = [];
  if (typeof genreIds !== 'undefined') {
    categoriesFilm = genreIds.map(genre => genre.name)
  }
  if (categoriesFilm.length > 2) {
    categoriesFilm = categoriesFilm.slice(0, 2);
  }
  if (categoriesFilm.length === 0) {
    return 'Film';
  }
  return categoriesFilm.join(', ');
}

if (favorite.length > 0) {
  librarySection.classList.remove('display-hidden');
  markupFilm(favorite);
} else {
  errorSectoin.classList.remove('display-hidden');
}
