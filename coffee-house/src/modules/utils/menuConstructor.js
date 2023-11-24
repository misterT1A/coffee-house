import MenuElementConstructor from './menuElementCreator';

export default class MenuConstructor {
  constructor(container, product) {
    this.container = container.querySelector('.menu_content');
    this.product = product;
    this.menuButtons = container.querySelectorAll('.menu_btn');
    this.isMenuChanging = false;
    this.changeMenu(this.menuButtons[0]);
    this.addListners();
  }

  configureDefault() {
    this.product.forEach((options) => {
      const element = new MenuElementConstructor(options);
      this.container.append(element.getMenuElement());
    });
  }

  changeMenu(btn, changing, change = false) {
    if (!btn.classList.contains('btn_active')) {
      if (!this.changing) {
        this.clearParentsCildren(change);
        this.changeActiveBtn(btn);
        this.addNewContent(btn, change);
      }
    }
  }

  clearParentsCildren(change) {
    if (change) {
      this.changing = true;
      setTimeout(() => {
        const childList = [...this.container.children];
        childList.forEach((elem) => {
          elem.classList.remove('menu_item_up');
          elem.classList.add('menu_item_down');
          setTimeout(() => elem.remove(), 550);
        });
      }, 100);
    } else {
      this.container.innerHTML = ' ';
    }
  }

  changeActiveBtn(btn) {
    this.menuButtons.forEach((elem) => elem.classList.remove('btn_active'));
    btn.classList.add('btn_active');
  }

  addNewContent(btn, change) {
    const products = this.product.filter(
      (elem) => elem.category === `${btn.dataset.product}`,
    );
    products.forEach((options) => {
      const element = new MenuElementConstructor(options);
      const elem = element.getMenuElement();
      if (!change) {
        this.container.append(elem);
      } else {
        setTimeout(() => {
          elem.classList.add('menu_item_up');
          this.container.append(elem);
          this.changing = false;
        }, 600);
      }
    });
  }

  addListners() {
    this.menuButtons.forEach((btn) =>
      btn.addEventListener('click', (event) =>
        this.changeMenu(btn, this.changing, true),
      ),
    );
  }
}
