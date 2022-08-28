import { createElement } from '../../render.js';

const createMovieCommentedListContainerTemplate = () => '<div class="films-list__container"></div>';


export default class MovieCommentedListContainerView {
  #element = null;

  get template() {
    return createMovieCommentedListContainerTemplate();
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
