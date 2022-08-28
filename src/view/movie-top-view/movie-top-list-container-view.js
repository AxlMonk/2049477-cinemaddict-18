import { createElement } from '../../render.js';

const createMovieTopListContainerTemplate = () => '<div class="films-list__container"></div>';


export default class MovieTopListContainerView {
  #element = null;

  get template() {
    return createMovieTopListContainerTemplate();
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
