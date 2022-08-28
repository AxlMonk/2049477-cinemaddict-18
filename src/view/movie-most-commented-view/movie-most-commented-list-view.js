import { createElement } from '../../render.js';

const createMovieMostCommentedListTemplate = () =>
  `
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
    </section>
  `;

export default class MovieMostCommentedListView {
  #element = null;

  get template() {
    return createMovieMostCommentedListTemplate();
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
