import { getGenres, getRandomFilmOfMonth } from './api';

(async () => {
  const film = await getRandomFilmOfMonth();
  console.log('filmMonth', film);

  const genres = await getGenres();

  const divEl = document.querySelector('.film-month_wrapper');
  if (divEl) {
    const resultMarkup = createMarkup(film, genres);
    divEl.innerHTML = resultMarkup;
  }
})();

const createMarkup = (film, genres) => {
  const baseUrl = window.innerWidth <= 600 ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' : 'https://image.tmdb.org/t/p/w1066_and_h600_bestv2';
  const imageSrc = baseUrl + film.poster_path;
  const overview = film.overview;


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
      <img class='film-month_img' src='${imageSrc}'>
    </div>
    <div class='film-month_content'>
      <div>
        <h3 class='film-month_info-title'>The lost city</h3>
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
          <span class='film-month_info-value span-value'>${popularity}</span>
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
        <button class='film-month_button-add'>Add to my library</button>
      </div>
    </div>
  `;
};