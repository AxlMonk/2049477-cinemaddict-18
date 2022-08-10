import MoviePresenter from './presenter/movie-presenter.js';
import UserRankView from './view/user-rank-view.js';
import { render } from './render.js';


const headerMovieElement = document.querySelector('.header');
const mainMovieElelement = document.querySelector('.main');
const moviePresenter = new MoviePresenter();

render(new UserRankView(), headerMovieElement);

moviePresenter.init(mainMovieElelement);
