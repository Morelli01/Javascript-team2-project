import axios from 'axios';

// DOM ELEMENTS
const heroSection = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');
const heroText = document.querySelector('.hero-text');
const heroTrailerBTN = document.querySelector('.hero-getstarted-btn');
const heroMoreBTN = document.querySelector('.hero-moredetails-btn');
const heroRaiting = document.querySelector('.rating');
const trailerModal = document.querySelector('.trailer-modal');
const closeModal = document.querySelector('.trailer-svg-close');
const trailerVideo = document.querySelector('.trailer-video');

let screenWidth = document.documentElement.clientWidth;

// SLICE HERO TEXT
if (screenWidth < 768) {
  heroText.textContent = heroText.textContent.slice(0, 120);
}

// EVENT HANDLERS
function onOpenModalTrailer(e) {
  e.preventDefault();
  trailerModal.classList.remove('ishidden');
  heroTrailerBTN.classList.add('blocked-element');
  document.body.classList.add('noScroll');
}

function onCloseModalTrailer(e) {
  trailerModal.classList.add('ishidden');
  heroTrailerBTN.classList.remove('blocked-element');
  document.body.classList.remove('noScroll');
}

// TRAILER VIDEO
async function fetchTrailer(id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchTrendingFilmsOfDay() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Load the trending films and set up the hero section
fetchTrendingFilmsOfDay()
  .then(data => {
    const { title, name, overview, backdrop_path, id } = data.results[getRandomNumber(0, 20)];

    fetchTrailer(id)
      .then(data => {
        const trailerKey = data[getRandomNumber(0, data.length)].key;
        onYouTubeIframeAPIReady(trailerKey);
        closeModal.classList.add('inother-position');
        console.log(data);
        console.log(`https://www.youtube.com/embed/${trailerKey}`);
      })
      .catch(error => {
        closeModal.classList.remove('inother-position');
        console.error(error);
      });

    heroSection.style.background = `linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original${backdrop_path}')`;
    heroSection.style.backgroundRepeat = 'no-repeat';
    heroSection.style.backgroundSize = 'cover';

    heroTitle.innerHTML = title || name;
    heroText.innerHTML = `${overview.slice(0, 90)}...`;

    if (screenWidth >= 768 && screenWidth < 1280) {
      heroTitle.style.paddingTop = '96px';
      heroText.innerHTML = `${overview.slice(0, 200)}...`;
    }
    if (screenWidth >= 1280) {
      heroTitle.style.paddingTop = '178px';
      heroText.innerHTML = `${overview.slice(0, 250)}...`;
    }

    heroTrailerBTN.textContent = 'Watch trailer';
    heroMoreBTN.classList.remove('ishidden');
    heroTrailerBTN.addEventListener('click', onOpenModalTrailer);
    closeModal.addEventListener('click', onCloseModalTrailer);
  })
  .catch(error => {
    heroTrailerBTN.textContent = 'Get Started';
    heroMoreBTN.classList.add('ishidden');
    console.error(error);
  });

// YOUTUBE PLAYER
function onYouTubeIframeAPIReady(id) {
  const player = new YT.Player('trailer-video', {
    height: '240',
    width: '320',
    videoId: id,
  });
}