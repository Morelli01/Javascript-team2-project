'use strict';
import { async } from '@vimeo/player';
import axios from 'axios';

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

const getRandomFilmOfMonth = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const firstDayOfMonth = `${year}-${month.toString().padStart(2, '0')}-01`;

  const discoverMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&primary_release_date.gte=${firstDayOfMonth}`;

  try {
    const response = await fetch(discoverMoviesUrl);

    const data = await response.json();
    const movies = data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomFilm = movies[randomIndex];

    return randomFilm;
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return null;
  }
};

const getGenres = async () => {
  const genresUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}`;

  try {
    const response = await fetch(genresUrl);

    const genresData = await response.json();
    const genres = genresData.genres;

    return genres;
  } catch (error) {
    console.error('error', error);
    return [];
  }
};

const getCategoriesQuery = async (query, page) => {
  const endpoint = 'search/movie';
  const { data } = await axios.get(
    `${baseUrl}/${endpoint}?api_key=${apiKey}&query=${query}&page=${page}&language=en-US`
  );
  // console.log(data);
  try {
    return data;
  } catch (err) {
    console.log(err);
  }
}
const getCategoriesId = async (id) => {
  const endpoint = `movie/${id}`;
  const { data } = await axios.get(
    `${baseUrl}/${endpoint}?api_key=${apiKey}&language=en-US`
  );
  try {
    return data;
  } catch (err) {
    console.log(err);
  }
}
export {
  getFilms,
  getRandomFilmOfMonth,
  getGenres,
  getCategoriesQuery,
  getCategoriesId
}