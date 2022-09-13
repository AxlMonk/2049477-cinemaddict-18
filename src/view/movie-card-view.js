import { createMovieCardInfoTemplate } from './movie-card-info-template.js';
import { createMovieControlTemplate } from './movie-card-control-template.js';
import AbstractView from '../framework/view/abstract-view.js';

const createMovieCardTemplate = ({movieInfo, comments}) =>
  `
    <article class="film-card">

      ${createMovieCardInfoTemplate(movieInfo, comments.length)}

      ${createMovieControlTemplate()}

    </article>
  `;

export default class MovieCardView extends AbstractView {
  #movie = null;

  constructor(movie) {
    super();
    this.#movie = movie;
  }

  get template() {
    return createMovieCardTemplate(this.#movie);
  }
}
