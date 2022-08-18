import { createElement } from '../render.js';
import { createMovieCardInfoTemplate } from './movie-card-info-template.js';

const createMovieCardTemplate = ({movieInfo, comments}) =>
  `
    <article class="film-card">

      ${createMovieCardInfoTemplate(movieInfo, comments.length)}

      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
  `;

export default class MovieCardView {
  constructor(movie) {
    this.movie = movie;
  }

  getTemplate() {
    return createMovieCardTemplate(this.movie);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
