import { generateMovies } from '../mock/movie.js';

export default class MoviesModel {
  movies = generateMovies();

  get = () => this.movies;
}
