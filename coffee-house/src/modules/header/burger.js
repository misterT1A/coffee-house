export default class BurgerMenu {
  constructor() {
    this.body = document.body;
    this.windowWidth = window.matchMedia('(max-width: 768px)');
    this.logoBtn = document.querySelector('.header_main_page ');
    this.wrapper = document.querySelector('.nav_wrapper');
    this.burgerBtn = document.querySelector('.burger_btn');
    this.addListners();
  }

  addListners() {
    this.windowWidth.addEventListener(
      'change',
      this.checkResizeActive.bind(this),
    );
    this.logoBtn.addEventListener('click', this.checkLinkLogogBtn.bind(this));
    this.burgerBtn.addEventListener('click', this.navTogleOnBtn.bind(this));
    this.wrapper.addEventListener('click', this.handlerBurgerClick.bind(this));
  }

  handlerBurgerClick(e) {
    if (
      e.target.classList.contains('nav_item_link') ||
      e.target.classList.contains('header_btn')
    ) {
      this.closeBurgerMenu();
    }
  }

  navTogleOnBtn() {
    if (!this.wrapper.classList.contains('nav_active')) {
      this.upBurgerMenu();
    } else {
      this.closeBurgerMenu();
    }
  }

  upBurgerMenu() {
    this.burgerBtn.classList.add('burger_btn_active');
    this.body.setAttribute('style', 'overflow: hidden');
    this.wrapper.classList.add('nav_active');
  }

  closeBurgerMenu() {
    if (this.wrapper.classList.contains('nav_active')) {
      this.burgerBtn.classList.remove('burger_btn_active');
      this.wrapper.classList.remove('nav_active');
      this.body.removeAttribute('style', 'overflow: hidden');
    }
  }

  checkResizeActive(e) {
    this.closeBurgerMenu();
  }

  checkLinkLogogBtn() {
    this.closeBurgerMenu();
  }
}
