import { getGenres, getRandomFilmOfMonth, getCategoriesId } from './api';
import { spinnerStart, spinnerStop } from './spin';
import { round } from './utils';
import { MovieLibrary } from './movie-library';

let currentFilm = null;

(async () => {
  const filmMonthWrapper = document.querySelector('.film-month_wrapper');
  if (!filmMonthWrapper) return;

  spinnerStart();
  const film = await getRandomFilmOfMonth();
  currentFilm = film;
  const findFilm = await getCategoriesId(film.id);

  const genres = await getGenres();
  // spinnerStop()

  if (filmMonthWrapper) {
    filmMonthWrapper.innerHTML = createMarkup(film, genres);
  }

  const addButton = document.querySelector('.film-month_button-add');
  addButton.addEventListener('click', async event => {
    const movieLibrary = new MovieLibrary();
    const isInLibrary = movieLibrary.isFilmInLibrary(event.target.dataset.id);
    const button = document.querySelector('.film-month_button-add');
    if (isInLibrary) {
      console.log('removing');
      movieLibrary.removeFilmFromLibrary(findFilm);
    } else {
      console.log('adding');
      movieLibrary.addFilmToLibrary(findFilm);
    }
    button.textContent = isInLibrary
      ? 'Add to my library'
      : 'Remove from my library';
  });
  spinnerStop();
})();

const createMarkup = (film, genres) => {
  const baseUrl =
    window.innerWidth <= 600
      ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
      : 'https://image.tmdb.org/t/p/w1066_and_h600_bestv2';
  const imageSrc = baseUrl + film.poster_path;
  const overview = film.overview;
  const title = film.original_title;

  const releaseDate = new Date(film.release_date);
  const day = releaseDate.getDate().toString().padStart(2, '0');
  const month = (releaseDate.getMonth() + 1).toString().padStart(2, '0');
  const year = releaseDate.getFullYear();

  const formattedReleaseDate = `${day}.${month}.${year}`;

  const movieLibrary = new MovieLibrary();
  const isInLibrary = movieLibrary.isFilmInLibrary(film.id);

  const voteAverage = film.vote_average;
  const voteCount = film.vote_count;
  const popularity = film.popularity;
  const filmGenres = genres
    .filter(genre => film.genre_ids.slice(0, 2).includes(genre.id))
    .map(({ name }) => name)
    .join(', ');
  return `
      <div class='film-month_image'>
        <img class='film-month_img' src='${imageSrc}' alt=''>
      </div>
      <div class='film-month_content'>
        <div>
          <h3 class='film-month_info-title'>${title}</h3>
        </div>
        <div class='film-month_info'>
          <div class='film-month_info-item'>
            <span class='film-month_info-label'>Release date</span>
            <span class='film-month_info-value film-month_info-year'>${formattedReleaseDate}</span>
          </div>
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
            <span class='film-month_info-value span-value'>${filmGenres}</span>
          </div>
        </div>
        <div class='film-month_about'>
          <h4 class='film-month_about-title'>About</h4>
          <p class='film-month_about-description'>${overview}</p>
        </div>
        <div class='film-month_button'>
          <button class='button film-month_button-add' data-id='${film.id}'>
          ${isInLibrary ? 'Remove from my library' : 'Add to my library'}
          </button>
        </div>
      </div>
  `;
};
