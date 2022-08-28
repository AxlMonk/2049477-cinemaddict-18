import { createElement } from '../../render.js';

const createMovieTopListTemplate = () =>
  `
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>
  `;

export default class MovieTopListView {
  #element = null;

  get template() {
    return createMovieTopListTemplate();
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