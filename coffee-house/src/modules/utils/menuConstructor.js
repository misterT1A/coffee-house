import MenuElementConstructor from './menuElementCreator';
import PopUp from './popUp/popUp';

export default class MenuConstructor {
  constructor(container, product) {
    this.container = container.querySelector('.menu_content');
    this.product = product;
    this.menuButtons = container.querySelectorAll('.menu_btn');
    this.loadMenuBlock = container.querySelector('.menu_load');
    this.btnLoadMore = container.querySelector('.menu_load_btn');
    // this.viewElements = [];
    this.isMenuChanging = false;
    this.contentWidth = 0;
    this.wasResizeHigh = false;
    this.wasResizeLow = false;
    this.changeMenu(this.menuButtons[0]);
    this.addListners();
  }

  // configureDefault() {
  //   this.product.forEach((options) => {
  //     const element = new MenuElementConstructor(options);
  //     this.container.append(element.getMenuElement());
  //   });
  // }

  changeMenu(btn, changing, change = false) {
    if (!btn.classList.contains('btn_active')) {
      if (!changing) {
        this.clearParentsCildren(change);
        this.changeActiveBtn(btn);
        this.addNewContent(btn, change);
        this.checkBtnLoadMore();
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
    this.viewElements = [];
  }

  changeActiveBtn(btn) {
    this.menuButtons.forEach((elem) => elem.classList.remove('btn_active'));
    btn.classList.add('btn_active');
  }

  addNewContent(btn, change) {
    this.viewElements = [];
    this.products = this.product.filter(
      (elem) => elem.category === `${btn.dataset.product}`,
    );
    if (this.products.length > 4) {
      this.isBigContent = true;
    } else {
      this.isBigContent = false;
    }
    if (this.contentWidth <= 768) {
      this.createMenuItems(this.products, change, true);
    } else {
      this.createMenuItems(this.products, change);
    }
  }

  createMenuItems(arr, change, isShort = false) {
    this.viewProducts = arr;
    if (isShort) {
      this.viewProducts = arr.filter((elem, index) => index < 4);
    }
    this.viewProducts.forEach((options) => {
      const element = new MenuElementConstructor(options);
      const elem = element.getMenuElement();
      this.viewElements.push(elem);
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

  resizeContent() {
    this.contentWidth = this.container.offsetWidth + 80;

    if (this.contentWidth <= 768) {
      this.wasResizeHigh = false;
      if (!this.wasResizeLow) {
        this.clearParentsCildren(false);
        this.createMenuItems(this.products, false, true);
        this.checkBtnLoadMore();
        this.wasResizeLow = true;
      }
    } else {
      this.wasResizeLow = false;
      if (!this.wasResizeHigh) {
        this.clearParentsCildren(false);
        this.createMenuItems(this.products, false);
        this.checkBtnLoadMore();
        this.wasResizeHigh = true;
      }
    }
  }

  checkBtnLoadMore() {
    if (this.contentWidth <= 768) {
      if (this.products.length - this.viewProducts.length > 0) {
        if (this.isBigContent) {
          this.loadMenuBlock.classList.add('menu_load_visible');
        }
      } else if (this.loadMenuBlock.classList.contains('menu_load_visible')) {
        setTimeout(() => {
          this.loadMenuBlock.classList.remove('menu_load_visible');
        }, 590);
      }
    } else {
      this.loadMenuBlock.classList.remove('menu_load_visible');
    }
  }

  loadMoreContent() {
    const moreProducts = this.products.filter((elem, index) => index > 3);
    this.createMenuItems(moreProducts, true);
    this.viewProducts = this.products;
    this.checkBtnLoadMore();
  }

  // modal() {
  //   const bodyMain = document.body;
  //   console.log('df');
  //   const modal = new PopUp(bodyMain);
  //   bodyMain.append(modal);
  //   modal.modalUp();
  // }

  addListners() {
    window.addEventListener('load', this.resizeContent.bind(this));
    window.addEventListener('resize', this.resizeContent.bind(this));
    this.menuButtons.forEach((btn) =>
      btn.addEventListener('click', (event) =>
        this.changeMenu(btn, this.changing, true),
      ),
    );
    // this.btnLoadMore.addEventListener('click', this.loadMoreContent.bind(this));
    // setTimeout(() => {
    //   this.viewElements.forEach((elem) =>
    //     elem.addEventListener('click', this.modal),
    //   );
    // }, 100);
  }
}
