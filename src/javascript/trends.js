import { getFilms, getGenres } from './api';

(async () => {
  const films = await getFilms(1);

  const topThree = films.results.slice(0, 3);

  const genres = await getGenres();
  let resultMarkup = '';

  if (window.innerWidth <= 768) {
    const film = topThree[0];
    resultMarkup = await createItemMarkup(film, genres);
  } else {
    for (const film of topThree) {
      resultMarkup += await createItemMarkup(film, genres);
    }
  }

  document.querySelector('.weekly_trends_list').innerHTML = resultMarkup;
})();

const createItemMarkup = async (film, genres) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  const imageSrc = baseUrl + film.backdrop_path;
  const title = film.original_title;
  const releaseYear = film.release_date.split('-')[0];
  const voteAverage = film.vote_average;

  const filmGenres = genres
    .filter((genre) => film.genre_ids.slice(0, 2).includes(genre.id))
    .map(({ name }) => name)
    .join(', ');

  return `<li class='weekly_trends_list_item' data-film-id='${film.id}'>
        <img src='${imageSrc}'>
        <div class='weekly-trends_description'>
          <div>
            <h4 class='film_title'>${title}</h4>
            <h5 class='film_description'>${filmGenres}<span class='separator'> | </span>${releaseYear}</h5>
          </div>
          <div class='rating'>${voteAverage}</div>
        </div>
      </li>`;
};


const seeAllLink = document.querySelector('.link_to_catalog');
if (seeAllLink) {
  seeAllLink.addEventListener('click', () => {
    window.location.href = 'https://www.themoviedb.org/movie/603692-john-wick-chapter-4';
  });
}