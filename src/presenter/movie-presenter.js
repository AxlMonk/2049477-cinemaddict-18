import MovieNavigationView from '../view/movie-navigation-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import MovieCardListView from '../view/movie-card-list-view.js';
import TopMovieView from '../view/top-movie-view.js';
import FilterView from '../view/filter-view.js';
import MovieView from '../view/movie-view.js';
import MainView from '../view/main-view.js';
import { render } from '../render.js';


export default class MoviePresenter {
  mainComponent = new MainView();
  movieComponent = new MovieView();

  init = (movieContainer) => {
    this.movieContainer = movieContainer;

    render(this.mainComponent, this.movieContainer);
    render(new MovieNavigationView(), this.mainComponent.getElement());
    render(new FilterView(), this.mainComponent.getElement());

    render(this.movieComponent, this.movieContainer);

    for (let i = 0; i < 5; i++) {
      render(new MovieCardListView(), this.movieComponent.getElement());
    }
    render(new TopMovieView(), this.movieComponent.getElement());
    render(new ShowMoreButtonView(), this.movieComponent.getElement());
  };
}

