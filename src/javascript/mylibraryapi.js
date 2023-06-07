import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '468c2ebbcd20d786d16a982ad3dded4a';

export class filmAPI {
  constructor() {
    this.page = 1;
    this.total_pages = 0;
    this.total_results = 0;
  }
  async getCategories() {
    const endpoint = 'trending/all/week';
    const { data } = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${this.page}&language=en-US`
    );
    try {
      this.total_pages = data.total_pages;
      this.total_results = data.total_results;

      return data.results;
    } catch (err) {
      console.log(err);
    }
  }
  async getCategoriesGenres() {
    const endpoint = 'genre/movie/list';
    const { data } = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${this.page}&language=en-US`
    );
    // console.log(data);
    try {
      return data.genres;
    } catch (err) {
      console.log(err);
    }
  }
  async getCategoriesQuery(query) {
    const endpoint = 'search/movie';
    const { data } = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${query}&page=${this.page}&language=en-US`
    );
    // console.log(data);
    try {
      return data.results;
    } catch (err) {
      console.log(err);
    }
  }
}
