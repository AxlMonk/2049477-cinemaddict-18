import SortView from '../view/sort-view.js';
import MoviesView from '../view/movies-view.js';
import MovieListView from '../view/movie-list-view.js';
import MovieListContainerView from '../view/movie-list-container-view.js';
import MovieCardView from '../view/movie-card-view.js';
import MovieButtonMoreView from '../view/movie-button-more-view.js';
import MovieTopListView from '../view/movie-top-view/movies-top-list-view.js';
import MovieTopListContainerView from '../view/movie-top-view/movie-top-list-container-view.js';
import MovieTopCardView from '../view/movie-top-view/movie-top-card-view.js';
import MovieMostCommentedListView from '../view/movie-most-commented-view/movie-most-commented-list-view.js';
import MovieCommentedListContainerView from '../view/movie-most-commented-view/movie-most-commented-list-container-view.js';
import MovieMostCommentedCardView from '../view/movie-most-commented-view/movie-most-commented-card-view.js';
import MovieDetailsView from '../view/movie-details-view.js';
import { render } from '../render.js';
import { TOP_FILM_COUNT, MOST_COMMENTED_FILM_COUNT, FILM_COUNT_PER_STEP} from '../const.js';
import { isEscapeKey } from '../utils.js';

export default class MoviesPresenter {
  #sortComponent = new SortView();
  #moviesComponent = new MoviesView();
  #movieListComponent = new MovieListView();
  #movieListContainerComponent = new MovieListContainerView();
  #movieButtonMoreComponent = new MovieButtonMoreView();
  #movieTopListComponent = new MovieTopListView();
  #movieTopListContainerComponent = new MovieTopListContainerView();
  #movieMostCommentedListComponent = new MovieMostCommentedListView();
  #movieMostCommetedContainerComponent = new MovieCommentedListContainerView();
  #movieDetailsComponent = null;


  #movieContainer = null;
  #moviesModel = null;
  #commentsModel = null;

  #movies = [];

  #renderdMovieCount = FILM_COUNT_PER_STEP;


  init = (movieContainer, moviesModel, commentsModel) => {

    this.#movieContainer = movieContainer;
    this.#moviesModel = moviesModel;
    this.#commentsModel = commentsModel;

    this.#movies = [...this.#moviesModel.movies];

    // *****  Отрисовываем основной список фильмов ***** //

    render(this.#sortComponent, this.#movieContainer);
    render(this.#moviesComponent, this.#movieContainer);
    render(this.#movieListComponent, this.#moviesComponent.element);
    render(this.#movieListContainerComponent, this.#movieListComponent.element);

    this.#movies.forEach((movie) => {
      this.#renderMovie(movie, this.#movieListContainerComponent);
    });

    if (this.#movies.length >= this.#renderdMovieCount) {
      render(this.#movieButtonMoreComponent, this.#movieListComponent.element);
    }

    // *****  Отрисовываем список топ - фильмов ***** //

    render(this.#movieTopListComponent, this.#moviesComponent.element);
    render(this.#movieTopListContainerComponent, this.#movieTopListComponent.element);

    for (let i = 0; i < TOP_FILM_COUNT; i++) {
      render(new MovieTopCardView(), this.#movieTopListContainerComponent.element);
    }

    // *****  Отрисовываем наиболее комментируемые фильмы ***** //

    render(this.#movieMostCommentedListComponent, this.#moviesComponent.element);
    render(this.#movieMostCommetedContainerComponent, this.#movieMostCommentedListComponent.element);

    for (let i = 0; i < MOST_COMMENTED_FILM_COUNT; i++) {
      render(new MovieMostCommentedCardView(), this.#movieMostCommetedContainerComponent.element);
    }
  };

  #renderMovie(movie, container) {
    const movieCardComponent = new MovieCardView(movie);

    const linkMovieCardComponent = movieCardComponent.element.querySelector('.film-card__link');

    linkMovieCardComponent.addEventListener('click', () => {
      this.#addMovieDetailsComponent(movie);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    render(movieCardComponent, container.element);
  }

  #renderMovieDetails(movie) {
    const comments = [...this.#commentsModel.get(movie)];

    this.#movieDetailsComponent = new MovieDetailsView(movie, comments);

    const closeButtonMovieDetailsElement = this.#movieDetailsComponent.element.querySelector('.film-details__close-btn');

    closeButtonMovieDetailsElement.addEventListener('click', () => {
      this.#removeMovieDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });

    render(this.#movieDetailsComponent, this.#movieContainer.parentElement);
  }

  #addMovieDetailsComponent = (movie) => {
    this.#renderMovieDetails(movie);
    document.body.classList.add('hide-overflow');
  };

  #removeMovieDetailsComponent = () => {
    this.#movieDetailsComponent.element.remove();
    this.#movieDetailsComponent = null;
    document.body.classList.remove('hide-overflow');
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#removeMovieDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}

