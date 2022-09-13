import AbstractView from '../../framework/view/abstract-view.js';

const createMovieCommentedListContainerTemplate = () => '<div class="films-list__container"></div>';


export default class MovieCommentedListContainerView extends AbstractView {

  get template() {
    return createMovieCommentedListContainerTemplate();
  }
}
