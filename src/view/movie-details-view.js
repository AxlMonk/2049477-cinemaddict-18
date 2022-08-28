import { createElement } from '../render.js';
import { createMovieDetailsInfoTemplate } from './movie-details-info-template.js';
import { createMovieDetailsControlTemplate } from './movie-details-control-template.js';
import { createMovieDetailsCommentsTemplate } from './movie-details-comments-template.js';
import { createMovieDetailsFormTemplate } from './movie-details-form-template.js';

const createMovieDetailsTemplate = ({movieInfo}, comments) =>
  `
    <section class="film-details">
      <div class="film-details__inner">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>

          ${createMovieDetailsInfoTemplate(movieInfo)}

          ${createMovieDetailsControlTemplate()}

        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">
              Comments <span class="film-details__comments-count">${comments.length}</span>
            </h3>

            ${createMovieDetailsCommentsTemplate(comments)}

            ${createMovieDetailsFormTemplate()}

          </section>
       </div>
     </div>
   </section>
  `;

export default class MovieDetailsView {
  #element = null;
  #movie = null;
  #comments = null;

  constructor(movie, comments) {
    this.#movie = movie;
    this.#comments = comments;
  }

  get template() {
    return createMovieDetailsTemplate(this.#movie, this.#comments);
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
