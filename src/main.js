import MoviesPresenter from './presenter/movies-presenter.js';
import UserProfileView from './view/header-user-profile-view.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import MoviesFilterView from './view/movies-filter-view';
import MoviesModel from './model/movies-model.js';
import CommentsModel from './model/comments-model.js';

import { render } from './render.js';


const bodyElement = document.querySelector('body');
const headerMovieElement = bodyElement.querySelector('.header');
const mainMovieElement = bodyElement.querySelector('.main');
const footerMovieElement = bodyElement.querySelector('.footer');
const footerStatisticElement = footerMovieElement.querySelector('.footer__statistics');

const moviesModel = new MoviesModel();
const commentsModel = new CommentsModel(moviesModel);

const moviesPresenter = new MoviesPresenter();

render(new UserProfileView(), headerMovieElement);
render(new MoviesFilterView(), mainMovieElement);
render(new FooterStatisticView(), footerStatisticElement);

moviesPresenter.init(mainMovieElement, moviesModel, commentsModel);
