import { getGenres, getRandomFilmOfMonth } from './api';
import { spinnerStart, spinnerStop } from './spin';
import { round } from './utils';

(async () => {
  // spinnerStart()
  if (
    (window.location.pathname !== '/' && window.location.pathname !== '/index.html')
    &&
    (window.location.pathname !== '/Javascript-team2-project/' && window.location.pathname !== '/Javascript-team2-project/index.html')
  ) return;
  const film = await getRandomFilmOfMonth();
  console.log('filmMonth', film);

  const genres = await getGenres();
  // spinnerStop()

  const filmMonthWrapper = document.querySelector('.film-month_wrapper');
  if (filmMonthWrapper) {
    const resultMarkup = createMarkup(film, genres);
    filmMonthWrapper.innerHTML = resultMarkup;
  }
})();

const createMarkup = (film, genres) => {
  const baseUrl = window.innerWidth <= 600 ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' : 'https://image.tmdb.org/t/p/w1066_and_h600_bestv2';
  const imageSrc = baseUrl + film.poster_path;
  const overview = film.overview;
  const title = film.original_title;


  const releaseDate = new Date(film.release_date);
  const day = releaseDate.getDate().toString().padStart(2, '0');
  const month = (releaseDate.getMonth() + 1).toString().padStart(2, '0');
  const year = releaseDate.getFullYear();

  const formattedReleaseDate = `${day} ${month} ${year}`;

  const voteAverage = film.vote_average;
  const voteCount = film.vote_count;
  const popularity = film.popularity;
  const filmGenres = genres
    .filter((genre) => film.genre_ids.slice(0, 2).includes(genre.id))
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
          <span class='film-month_info-value span-value'>${round(popularity, 10)}</span>
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
        <button class='button film-month_button-add'>Add to my library</button>
      </div>
    </div>
  `;
};