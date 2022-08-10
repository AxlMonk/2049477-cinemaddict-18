import { createElement } from '../render.js';

const createMainTemplate = () => '<main class="main"></main>';

export default class MainView {
  getTemplate() {
    return createMainTemplate();
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
