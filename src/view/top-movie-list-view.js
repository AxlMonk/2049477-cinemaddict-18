import { createElement } from '../render.js';

const createTopMovieListTemplate = () => '<section class="films-list films-list--extra"></section>';


export default class TopMovieListView {
  getTemplate() {
    return createTopMovieListTemplate();
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

