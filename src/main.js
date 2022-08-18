import MoviePresenter from './presenter/movie-presenter.js';
import UserRankView from './view/user-rank-view.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import MoviesModel from './model/movies-model.js';
import CommentsModel from './model/comments-model.js';

import { render } from './render.js';


const bodyElement = document.querySelector('body');
const headerMovieElement = bodyElement.querySelector('.header');
const mainMovieElelement = bodyElement.querySelector('.main');
const footerMovieElement = bodyElement.querySelector('.footer');
const footerStatisticElement = footerMovieElement.querySelector('.footer__statistics');

const moviesModel = new MoviesModel();
const commentsModel = new CommentsModel();

const moviePresenter = new MoviePresenter();

render(new UserRankView(), headerMovieElement);
render(new FooterStatisticView(), footerStatisticElement);

moviePresenter.init(mainMovieElelement, moviesModel, commentsModel);
