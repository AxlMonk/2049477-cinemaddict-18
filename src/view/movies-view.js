import AbstractView from '../framework/view/abstract-view.js';

const createMoviesTemplate = () => '<section class="films"></section>';

export default class MoviesView extends AbstractView {

  get template() {
    return createMoviesTemplate();
  }
}
