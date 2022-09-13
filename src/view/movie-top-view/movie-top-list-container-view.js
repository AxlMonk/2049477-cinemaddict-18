import AbstractView from '../../framework/view/abstract-view.js';

const createMovieTopListContainerTemplate = () => '<div class="films-list__container"></div>';


export default class MovieTopListContainerView extends AbstractView {

  get template() {
    return createMovieTopListContainerTemplate();
  }
}
