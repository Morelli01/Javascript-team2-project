import Pagination from 'tui-pagination';
import { filmAPI } from '../javascript/mylibraryapi';

document.addEventListener('DOMContentLoaded', function () {
  const ulEl = document.querySelector('.search_film_list');
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('.dropdown-content');
  const genreList = document.querySelector('.genre-list');
  const errorSection = document.querySelector('.error-section');
  const librarySection = document.querySelector('.library-section');
  const dropdown = document.querySelector('.dropdown');

  let categories = {};
  const API = new filmAPI();

  API.getCategoriesGenres()
    .then(res => {
      res.forEach(({ id, name }) => {
        categories[id] = name;
      });
      return API.getCategories();
    })
    .then(categoriesData => {
      markupFilm(categoriesData);
      initPagination(categoriesData.length);
    })
    .catch(error => {
      console.log(error);
    });

  function markupFilm(data) {
    if (data.length > 0) {
      ulEl.innerHTML = generateFilmMarkup(data);
      errorSection.classList.add('is-hidden');
      librarySection.classList.remove('is-hidden');
    } else {
      ulEl.innerHTML = '';
      errorSection.classList.remove('is-hidden');
      librarySection.classList.add('is-hidden');
    }
  }

  function categoriesFilms(genreIds) {
    let categoriesFilm = genreIds
      .filter(genre => genre !== undefined)
      .map(genre => categories[genre]);

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
        : first_air_date.split('-')[0];
    return year;
  }

  dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('active');
  });

  genreList.addEventListener('click', event => {
    const genreName = event.target.dataset.genre;
    if (genreName === 'All') {
      API.getCategories().then(res => {
        markupFilm(res);
        initPagination(res.length);
      });
    } else {
      const genreId = Object.keys(categories).find(
        key => categories[key] === genreName
      );
      API.getCategoriesQuery(genreName).then(res => {
        markupFilm(res);
        initPagination(res.length);
      });
    }
    dropdownContent.classList.remove('active');
  });

  function initPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination2');
    const itemsPerPage = 12;

    const options = {
      totalItems,
      itemsPerPage,
      visiblePages: 5,
      centerAlign: true,
    };

    const pagination = new Pagination(paginationContainer, options);

    pagination.on('afterMove', event => {
      const currentPage = event.page;
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      API.getCategories()
        .then(res => {
          const pageItems = res.slice(start, end);
          markupFilm(pageItems);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
});
