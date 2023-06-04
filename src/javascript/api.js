'use strict';

const apiKey = '97fe01addf81f73693338979426ece1e';
const baseUrl = 'https://api.themoviedb.org/3';


const getFilms = async (page) => {
  const trendingMoviesUrl = `${baseUrl}/trending/movie/week?api_key=${apiKey}&page=${page}`;

  try {
    const result = await fetch(trendingMoviesUrl);

    console.log(result);

    return result.json();
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export {
  getFilms
}