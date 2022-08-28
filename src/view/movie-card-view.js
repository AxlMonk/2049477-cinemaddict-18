import { createElement } from '../render.js';
import { createMovieCardInfoTemplate } from './movie-card-info-template.js';
import { createMovieControlTemplate } from './movie-card-control-template.js';

const createMovieCardTemplate = ({movieInfo, comments}) =>
  `
    <article class="film-card">

      ${createMovieCardInfoTemplate(movieInfo, comments.length)}

      ${createMovieControlTemplate()}

    </article>
  `;

export default class MovieCardView {
  #element = null;
  #movie = null;

  constructor(movie) {
    this.#movie = movie;
  }

  get template() {
    return createMovieCardTemplate(this.#movie);
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
