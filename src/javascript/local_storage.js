import { getCategoriesId } from './api';

const KEY_FAVORITE = 'favorite';

export const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

export async function onClickFilm(ev) {
  let filmId = null;
  const btn = ev.target.closest('.js_add_collection');

  if (btn) {
    const { id } = btn.closest('.more-details').dataset;
    filmId = await findFilm(Number(id));
    if (filmId) {
      const inStorage = favoriteArr.some(({ id }) => id === filmId);
      if (inStorage) {
        favoriteArr.splice(
          favoriteArr.findIndex(film => film.id === filmId),
          1
        );
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
        btn.textContent = 'Add to my library';
      } else {
        const film = await getCategoriesId(filmId);
        favoriteArr.push(film);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
        btn.textContent = 'Remove from my library';
      }
    }
  }
}

async function findFilm(ev) {
  const res = await getCategoriesId(ev);
  return res.id === ev ? res.id : null;
}
