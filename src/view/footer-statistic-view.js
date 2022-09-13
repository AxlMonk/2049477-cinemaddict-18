import AbstractView from '../framework/view/abstract-view.js';

const createFooterStatisticTemplate = () =>
  `
    <section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>
  `;

export default class FooterStatisticView extends AbstractView {

  get template() {
    return createFooterStatisticTemplate();
  }
}
