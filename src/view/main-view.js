import { createElement } from '../render.js';

const movieTemplate = () => '<main class="main"></main>';

export default class MainView {
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
