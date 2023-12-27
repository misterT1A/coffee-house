import MenuElementConstructor from './menuElementCreator';

export default class MenuConstructor {
  constructor(container, product) {
    this.body = document.body;
    this.container = container.querySelector('.menu_content');
    this.product = product;
    this.menuButtons = container.querySelectorAll('.menu_btn');
    [this.menuBtnDefault] = this.menuButtons;
    this.loadMenuBlock = container.querySelector('.menu_load');
    this.btnLoadMore = container.querySelector('.menu_load_btn');
    this.windowWidth = window.matchMedia('(max-width: 768px)');
    this.isMenuChanging = false;
    this.isNowChangingProgress = false;
    this.contentWidth = 0;
    this.wasResizeHigh = false;
    this.wasResizeLow = false;
    this.animationDelay = 600;
    this.changeMenu(this.menuBtnDefault);
    this.addListners();
  }

  changeMenu(btn, changing, isChangeContent = false) {
    if (!btn.classList.contains('btn_active')) {
      if (!changing) {
        this.clearParentsCildren(isChangeContent);
        this.changeActiveBtn(btn);
        this.addNewContent(btn, isChangeContent);
        this.checkBtnLoadMore();
      }
    }
  }

  clearParentsCildren(isChangeContent) {
    if (isChangeContent) {
      this.isNowChangingProgress = true;
      setTimeout(() => {
        const childList = [...this.container.children];
        childList.forEach((elem) => {
          elem.classList.remove('menu_item_up');
          elem.classList.add('menu_item_down');
          elem.addEventListener('animationend', () => {
            elem.remove();
          });
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

  addNewContent(btn, isChangeContent) {
    this.products = this.product.filter(
      (elem) => elem.category === `${btn.dataset.product}`,
    );
    if (this.products.length > 4) {
      this.isBigContent = true;
    } else {
      this.isBigContent = false;
    }
    if (this.windowWidth.matches) {
      this.createMenuItems(this.products, isChangeContent, true);
    } else {
      this.createMenuItems(this.products, isChangeContent);
    }
  }

  createMenuItems(arr, isChangeContent, isShort = false) {
    this.viewProducts = arr;
    if (isShort) {
      this.viewProducts = arr.filter((elem, index) => index < 4);
    }
    this.viewProducts.forEach((options) => {
      const element = new MenuElementConstructor(options);
      const elem = element.getMenuElement();
      if (!isChangeContent) {
        this.container.append(elem);
      } else {
        setTimeout(() => {
          elem.classList.add('menu_item_up');
          this.container.append(elem);
          this.isNowChangingProgress = false;
        }, this.animationDelay);
      }
    });
  }

  resizeContent() {
    if (this.windowWidth.matches) {
      // this.wasResizeHigh = false;
      this.clearParentsCildren(false);
      this.createMenuItems(this.products, false, true);
      // if (!this.wasResizeLow) {
      //   this.createMenuItems(this.products, false, true);
      //   this.wasResizeLow = true;
      // }
    } else {
      this.clearParentsCildren(false);
      this.createMenuItems(this.products, false);
      // this.wasResizeLow = false;
      // if (!this.wasResizeHigh) {
      //   this.createMenuItems(this.products, false);
      //   this.wasResizeHigh = true;
      // }
    }

    this.checkBtnLoadMore();
  }

  checkBtnLoadMore() {
    if (this.windowWidth.matches) {
      if (this.products.length - this.viewProducts.length > 0) {
        if (this.isBigContent) {
          this.loadMenuBlock.classList.add('menu_load_visible');
        }
      } else if (this.loadMenuBlock.classList.contains('menu_load_visible')) {
        setTimeout(() => {
          this.loadMenuBlock.classList.remove('menu_load_visible');
        }, this.animationDelay);
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

  addListners() {
    document.addEventListener('load', this.resizeContent.bind(this));
    this.windowWidth.addEventListener('change', this.resizeContent.bind(this));
    this.menuButtons.forEach((btn) =>
      btn.addEventListener('click', (event) =>
        this.changeMenu(btn, this.changing, true),
      ),
    );
    this.btnLoadMore.addEventListener('click', this.loadMoreContent.bind(this));
  }
}
