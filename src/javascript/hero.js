import axios from 'axios';
import { renderStars, getRandomNumber } from './utils';

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
    document.removeEventListener('click', onCloseTouchBody);
  }
}

function onOpenModalTrailer(e) {
  e.preventDefault();
  trailerModal.classList.remove('ishidden');
  heroTrailerBTN.classList.add('blocked-element');
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', onCloseTouchBody);
}

function onCloseModalTrailer() {
  trailerModal.classList.add('ishidden');
  heroTrailerBTN.classList.remove('blocked-element');
  document.removeEventListener('keydown', handleKeyDown);
  if (closeModal.classList.contains('inother-position')) {
    player.pauseVideo();
  }
}

//TRAILER_VIDEO ===========================================================
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

trendingFilms_DAY()
  .then(data => {
    const {
      title = '',
      name = '',
      overview = '',
      backdrop_path = '',
      id,
      vote_average,
    } = data.results[getRandomNumber(0, 20)];

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
    max-width: 1280px;
    margin: 0 auto;
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
  })
  .catch(e => {
    heroTrailerBTN.textContent = 'Get Started';
    heroMoreBTN.classList.add('ishidden');
    heroRating.classList.add('ishidden');
  });
