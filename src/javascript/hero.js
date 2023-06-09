import axios from 'axios';
import { renderStars, getRandomNumber } from './utils';
import { onClickFilm, favoriteArr } from './local_storage';
import { async } from '@vimeo/player';

// YUOTUBE_PLAYER====================================
let player;

function onYouTubeIframeAPIReady(id) {
  player = new YT.Player('trailer-video', {
    height: '240',
    width: '320',
    videoId: `${id}`,
  });
}

// DOM ELEMENTS================================================
const heroSection = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');
const heroText = document.querySelector('.hero-text');
const heroTrailerBTN = document.querySelector('.hero-getstarted-btn');
const heroMoreBTN = document.querySelector('.hero-moredetails-btn');
const heroRating = document.querySelector('.rating-box');
const trailerModal = document.querySelector('.trailer-modal');
const closeModal = document.querySelector('.trailer-svg-close');
const heroMoreDeteils = document.querySelector('.hero-more-deteils');
const heroMoreDeteils_BTN = document.querySelector('.hero-moredetails-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// =============================================================
let screenWidth = document.documentElement.clientWidth;

// SLICE HERO TEXT =======================================
if (screenWidth < 768) {
  heroText.textContent = heroText.textContent.slice(0, 120);
}
if (screenWidth >= 768) {
  heroText.textContent = heroText.textContent.slice(0);
}

// EVENT FUNCTION=====================================

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    trailerModal.classList.add('ishidden');
    heroTrailerBTN.classList.remove('blocked-element');

    heroMoreDeteils.classList.add('ishidden');
    heroMoreDeteils_BTN.classList.remove('blocked-element');
    modalOverlay.classList.add('ishidden');
    document.body.classList.remove('noScroll');

    document.removeEventListener('keydown', handleKeyDown);
    if (closeModal.classList.contains('inother-position')) {
      player.pauseVideo();
    }
  }
}

function onCloseTouchBody(event) {
  if (
    event.target.classList.contains('hero-wrapper-btn') ||
    event.target.classList.contains('hero-getstarted-btn')
  ) {
    return;
  }
  if (!trailerModal.contains(event.target)) {
    trailerModal.classList.add('ishidden');

    heroTrailerBTN.classList.remove('blocked-element');
    heroMoreDeteils_BTN.classList.remove('blocked-element');

    document.removeEventListener('click', onCloseTouchBody);
    document.removeEventListener('keydown', handleKeyDown);
  }
}

function onOpenDetails() {
  heroMoreDeteils.classList.remove('ishidden');
  modalOverlay.classList.remove('ishidden');

  heroMoreDeteils_BTN.classList.add('blocked-element');
  heroTrailerBTN.classList.add('blocked-element');

  document.body.classList.add('noScroll');
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', onCloseBackdrop);
}

function onCloseBackdrop(e) {
  if (
    e.target.classList.contains('hero-wrapper-btn') ||
    e.target.classList.contains('hero-moredetails-btn')
  ) {
    return;
  }
  if (e.target === modalOverlay) {
    heroMoreDeteils.classList.add('ishidden');
    modalOverlay.classList.add('ishidden');

    heroMoreDeteils_BTN.classList.remove('blocked-element');
    heroTrailerBTN.classList.remove('blocked-element');

    document.body.classList.remove('noScroll');
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', onCloseBackdrop);
  }
}

function onCloseDetails() {
  heroMoreDeteils.classList.add('ishidden');
  modalOverlay.classList.add('ishidden');

  heroMoreDeteils_BTN.classList.remove('blocked-element');
  heroTrailerBTN.classList.remove('blocked-element');

  document.body.classList.remove('noScroll');
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('click', onCloseBackdrop);
}

function onOpenModalTrailer(e) {
  e.preventDefault();

  heroMoreDeteils_BTN.classList.add('blocked-element');
  heroTrailerBTN.classList.add('blocked-element');

  trailerModal.classList.remove('ishidden');

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', onCloseTouchBody);
}

function onCloseModalTrailer() {
  trailerModal.classList.add('ishidden');

  heroMoreDeteils_BTN.classList.remove('blocked-element');
  heroTrailerBTN.classList.remove('blocked-element');

  document.removeEventListener('keydown', handleKeyDown);

  if (closeModal.classList.contains('inother-position')) {
    player.pauseVideo();
  }
}

//TRAILER_VIDEO  ASYNC FUNCTION===========================================================
async function trailer(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE',
    },
  };
  const response = await axios.request(options);
  return response.data.results;
}

async function trendingFilms_DAY() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE',
    },
  };

  const response = await axios.request(options);
  return response.data;
}

async function genre_ID() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: { language: 'en' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE',
    },
  };

  const response = await axios.request(options);
  return response.data.genres;
}

// FUNCTION=====================================================

function renderMoreDeteils(
  id,
  poster_path,
  title,
  vote_average,
  popularity,
  overview,
  vote_count,
  genres
) {
  const inStorage = favoriteArr.some(film => film.id === id);
  const buttonText = inStorage ? 'Remove from my library' : 'Add to my library';
  return (heroMoreDeteils.innerHTML = `
    <p  class="hero-more-svg">X</p>
  <div class="hero-more-poster"  style="background:url('https://image.tmdb.org/t/p/w300${poster_path}');  
  background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

  ">
  </div>
   </div>

   <div class="hero-more-deteils-info js_add_id" data-id="${id}">
  <h2 class="hero-more-title">${title}</h2>
  <div class="hero-more-container">
    <div class="hero-more-wrapper">
      <p class="hero-more-specification">Vote / Votes</p>
      <p class="hero-more-specification">Popularity</p>
      <p class="hero-more-specification">Genre</p>
    </div>
    <div class="hero-more-box">
      <p class="hero-more-stats"> <span class="hero-more-accent">${vote_average.toFixed(
        1
      )}</span>
        <span class="hero-more-slash">/</span> <span class="hero-more-accent">${Math.round(
          vote_count
        )}</span>
      </p>
      <p class="hero-more-stats">${popularity.toFixed(1)}</p>
      <p class="hero-more-stats">${genres}</p>
    </div>
  </div>

  <p class="hero-more-about">About</p>

  <p class="hero-more-descriptions">${overview}</p>
      <button class="hero-more_deteils-add_btn js_add_collection">${buttonText}</button>

  </div>

  `);
}

trendingFilms_DAY()
  .then(data => {
    const {
      title = '',
      name = '',
      overview = '',
      backdrop_path = '',
      id,
      vote_average,
      popularity,
      poster_path,
      vote_count,
      genre_ids,
    } = data.results[getRandomNumber(0, 20)];

    genre_ID().then(data => {
      const genresArr = [];

      data.map(e => {
        genre_ids.map(el => {
          if (el === e.id) {
            genresArr.push(e.name);
          }
        });
      });
      renderMoreDeteils(
        id,
        poster_path,
        title,
        vote_average,
        popularity,
        overview,
        vote_count,
        genresArr.join(' ')
      );
      const heroMoreDeteils_X = document.querySelector('.hero-more-svg');
      heroMoreDeteils_X.addEventListener('click', onCloseDetails);
      const moreВeteils_addBtn = document.querySelector('.js_add_collection');

      moreВeteils_addBtn.addEventListener('click', onClickFilm);
    });

    trailer(id)
      .then(data => {
        if (data.length === 0) {
          return;
        }
        onYouTubeIframeAPIReady(data[getRandomNumber(0, data.length)].key);
        closeModal.classList.add('inother-position');
      })
      .catch(e => {
        closeModal.classList.remove('inother-position');
      });

    heroSection.style = `
    // max-width: 1280px;
    // margin: 0 auto;
   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original${backdrop_path}');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
    `;

    renderStars(heroRating, vote_average);

    heroTitle.innerHTML = `${title || name}`;
    heroText.innerHTML = `${overview.slice(0, 90)}...`;

    if (screenWidth >= 768 && screenWidth < 1280) {
      heroRating.style.padding = '17px 0 ';
      heroTitle.style.paddingTop = '96px';
      heroText.innerHTML = `${overview.slice(0, 200)}...`;
    }
    if (screenWidth >= 1280) {
      heroRating.style.padding = '17px 0 ';
      heroTitle.style.paddingTop = '178px';
      heroText.innerHTML = `${overview.slice(0, 250)}...`;
    }

    heroTrailerBTN.textContent = 'Watch trailer';
    heroMoreBTN.classList.remove('ishidden');
    heroTrailerBTN.classList.remove('is-hidden');

    if (heroTrailerBTN.textContent === 'Watch trailer') {
      heroTrailerBTN.addEventListener('click', onOpenModalTrailer);
    }

    closeModal.addEventListener('click', onCloseModalTrailer);

    heroMoreDeteils_BTN.addEventListener('click', onOpenDetails);
  })

  .catch(e => {
    heroTrailerBTN.textContent = 'Get Started';
    heroMoreBTN.classList.add('ishidden');
    heroRating.classList.add('ishidden');
  });
