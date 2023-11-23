import MenuElementConstructor from './menuElementCreator';

export default class MenuConstructor {
  constructor(container, product) {
    this.container = container.querySelector('.menu_content');
    this.product = product;
    this.menuButtons = container.querySelectorAll('.menu_btn');
    // this.configure();
    this.changeMenu(this.menuButtons[0]);
    this.addListners();
  }

  configureDefault() {
    this.product.forEach((options) => {
      const element = new MenuElementConstructor(options);
      this.container.append(element.getMenuElement());
    });
  }

  changeMenu(btn) {
    this.container.innerHTML = ' ';
    this.menuButtons.forEach((elem) => elem.classList.remove('btn_active'));
    btn.classList.add('btn_active');
    const products = this.product.filter(
      (elem) => elem.category === `${btn.dataset.product}`,
    );
    products.forEach((options) => {
      // console.log(options);
      const element = new MenuElementConstructor(options);
      this.container.append(element.getMenuElement());
    });
    // console.log(Array.from(this.container.childNodes));
  }

  addListners() {
    this.menuButtons.forEach((btn) =>
      btn.addEventListener('click', (event) => this.changeMenu(btn)),
    );
  }
}
