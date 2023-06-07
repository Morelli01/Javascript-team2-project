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
  console.log(event.key);
  if (event.key === 'Escape') {
    trailerModal.classList.add('ishidden');
    heroTrailerBTN.classList.remove('blocked-element');
    document.removeEventListener('keydown', handleKeyDown);
    player.pauseVideo();
  }
}

function onOpenModalTrailer(e) {
  e.preventDefault();
  trailerModal.classList.remove('ishidden');
  heroTrailerBTN.classList.add('blocked-element');

  document.addEventListener('keydown', handleKeyDown);

  // document.body.classList.add('noScroll');
}

function onCloseModalTrailer() {
  trailerModal.classList.add('ishidden');
  heroTrailerBTN.classList.remove('blocked-element');
  document.removeEventListener('keydown', handleKeyDown);
  player.pauseVideo();
  // document.body.classList.remove('noScroll');
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
  console.log(response.data);
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
        console.log(data.length);
        if (data.length === 0) {
          return;
        }
        onYouTubeIframeAPIReady(data[getRandomNumber(0, data.length)].key);
        closeModal.classList.add('inother-position');
        console.log(data);
      })
      .catch(e => {
        closeModal.classList.remove('inother-position');
        console.log('NO TRAILER', e);
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

// API=====================================
// "w92": ширина 92 пикселя
// "w154": ширина 154 пикселя
// "w185": ширина 185 пикселей
// "w342": ширина 342 пикселя
// "w500": ширина 500 пикселей
// "w780": ширина 780 пикселей
// "original": оригинальный размер изображения
// `https://www.youtube.com/embed/${trailer.key}`;
