import { getCategoriesId } from './api';
import { markupFilm } from './favorite';

const KEY_FAVORITE = 'favorite';

export const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

export async function onClickFilm(ev) {
  let filmId = null;
  const btn = ev.target.closest('.js_add_collection');

  if (btn) {
    const { id } = btn.closest('.js_add_id').dataset;
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
        if (window.location.href.includes('my-library.html')) {
          colseModalLib();
          markupFilm(favoriteArr);
          chekMyLibraryFilms();
        }
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

function colseModalLib() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.classList.remove('noScroll');
}

function chekMyLibraryFilms() {
  if (favoriteArr.length === 0) {
    const errorSectoin = document.querySelector('.error-section');
    const librarySection = document.querySelector('.library-section');
    librarySection.classList.add('display-hidden');
    errorSectoin.classList.remove('display-hidden');
  }
}
