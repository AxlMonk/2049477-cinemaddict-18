import { createElement } from '../render.js';

const movieTemplate = () => '<section class="films"></section>';

export default class MovieView {
  gerTemplate() {
    return movieTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.gerTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
