import axios from 'axios';

const heroSection = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');
const heroText = document.querySelector('.hero-text');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

async function fetchMovie() {
  response = await axios.request(options);
  return response.data;
}

fetchMovie().then(data => {
  const movi = data.results[getRandomNumber(0, 20)];
  console.log(movi);
  heroSection.style = `
   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original${movi.backdrop_path}');
   background-repeat: no-repeat;
   background-size: cover;
    `;
  heroTitle.innerHTML = `${movi.title || movi.name}`;
  heroText.innerHTML = `${movi.overview.slice(0, 90)}...`;
});

// "w92": ширина 92 пикселя
// "w154": ширина 154 пикселя
// "w185": ширина 185 пикселей
// "w342": ширина 342 пикселя
// "w500": ширина 500 пикселей
// "w780": ширина 780 пикселей
// "original": оригинальный размер изображения
