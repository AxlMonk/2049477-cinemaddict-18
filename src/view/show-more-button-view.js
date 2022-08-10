import { createElement } from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreButtonView {
  gerTemplate() {
    return createShowMoreButtonTemplate();
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

