import { createElement } from '../render.js';

const createTopMovieTitleTemplate = () => '<h2 class="films-list__title">Top rated</h2>';


export default class TopMovieTitleView {
  getTemplate() {
    return createTopMovieTitleTemplate();
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
