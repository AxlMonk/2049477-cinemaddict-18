import TopMovieContainerView from '../view/top-movies-container-view.js';
import MovieNavigationView from '../view/movie-navigation-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import MovieContainerView from '../view/movies-container-view.js';
import MovieCardListView from '../view/movie-card-list-view.js';
import TopMovieTitleView from '../view/top-movie-title-view.js';
import TopMovieListView from '../view/top-movie-list-view.js';
import TopMovieView from '../view/top-movie-card-view.js';
import MovieCardView from '../view/movie-card-view.js';
import FilterView from '../view/filter-view.js';
import MovieView from '../view/movie-view.js';
import MainView from '../view/main-view.js';
import MovieDetailsView from '../view/movie-details-view.js';
import { render } from '../render.js';


export default class MoviePresenter {
  mainMovieComponent = new MainView();
  movieComponent = new MovieView();
  movieListComponent = new MovieCardListView();
  movieListContainer = new MovieContainerView();
  topMovieListComponent = new TopMovieListView();
  topMovieListContainer = new TopMovieContainerView();

  init = (movieContainer, moviesModel, commentsModel) => {
    this.movieContainer = movieContainer;
    this.moviesModel = moviesModel;
    this.commentsModel = commentsModel;

    this.movies = [...moviesModel.get()];

    render(this.mainMovieComponent, this.movieContainer);

    render(new MovieNavigationView(), this.mainMovieComponent.getElement());
    render(new FilterView(), this.mainMovieComponent.getElement());

    render(this.movieComponent, this.mainMovieComponent.getElement());

    render(this.movieListComponent, this.movieComponent.getElement());
    render(this.movieListContainer, this.movieListComponent.getElement());
    for (let i = 0; i < this.movies.length; i++) {
      render(new MovieCardView(this.movies[i]), this.movieListContainer.getElement());
    }
    render(new ShowMoreButtonView(), this.movieListComponent.getElement());

    render(this.topMovieListComponent, this.movieComponent.getElement());
    render(new TopMovieTitleView(), this.topMovieListComponent.getElement());
    render(this.topMovieListContainer, this.topMovieListComponent.getElement());
    for (let j = 0; j < 2; j++) {
      render(new TopMovieView(), this.topMovieListContainer.getElement());
    }
    const comments = [...this.commentsModel.get(this.movies[0])];

    render(new MovieDetailsView(this.movies[0], comments), this.movieContainer.parentElement);
  };
}

