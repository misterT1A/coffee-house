export default class BurgerMenu {
  constructor(body) {
    this.body = body;
    this.wrapper = document.querySelector('.nav_wrapper');
    this.burgerBtn = document.querySelector('.burger_btn');
    this.navLinks = document.querySelectorAll('.nav_item_link');
    this.menuLink = document.querySelector('.header_btn');
    this.addListers();
  }

  addListers() {
    this.burgerBtn.addEventListener('click', this.navTogleOnBtn.bind(this));
    this.wrapper.addEventListener('click', this.checkNavActive.bind(this));
    this.navLinks.forEach((link) =>
      link.addEventListener('click', this.checkNavActive.bind(this)),
    );
    this.menuLink.addEventListener('click', this.checkNavActive.bind(this));
  }

  navTogleOnBtn() {
    if (!this.wrapper.classList.contains('nav_active')) {
      this.burgerBtn.classList.add('burger_btn_active');
      this.wrapper.setAttribute('style', 'display: flex;');

      setTimeout(() => {
        this.body.setAttribute('style', 'overflow: hidden');
        this.wrapper.classList.add('nav_active');
      }, 100);
    } else {
      this.burgerBtn.classList.remove('burger_btn_active');
      this.wrapper.classList.remove('nav_active');

      setTimeout(() => {
        this.wrapper.removeAttribute('style', 'display: flex;');
        this.body.removeAttribute('style', 'overflow: hidden');
      }, 300);
    }
  }

  checkNavActive() {
    if (this.wrapper.classList.contains('nav_active')) {
      this.burgerBtn.classList.remove('burger_btn_active');
      this.wrapper.classList.remove('nav_active');

      setTimeout(() => {
        this.wrapper.removeAttribute('style', 'display: flex;');
        this.body.removeAttribute('style', 'overflow: hidden');
      }, 300);
    }
  }
}
