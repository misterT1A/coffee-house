import './index.html';
import './index.scss';

// components
import header from './modules/header/header';
import main from './modules/main/main';
import footer from './modules/footer/footer';

const bodyMain = document.querySelector('body');
bodyMain.append(header.header, main, footer.footer);

const logoLink = document.querySelector('.header_main_page');
// eslint-disable-next-line no-script-url
logoLink.setAttribute('href', 'javascript:void(0)');
logoLink.classList.add('menu_logo_disabled');

const mainPageBtn = document.querySelector('.header_main_page');
const menuBtn = document.querySelector('.header_btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('active');
});

const nav = document.querySelector('.nav_wrapper');
const burgerBtn = document.querySelector('.burger_btn');
const { body } = document;

burgerBtn.addEventListener('click', () => {
  if (!nav.classList.contains('nav_active')) {
    // bodyMain.classList.add('body_overflow_hidden');
    burgerBtn.classList.add('burger_btn_active');
    nav.setAttribute('style', 'display: flex;');

    setTimeout(() => {
      body.setAttribute('style', 'overflow: hidden');
      nav.classList.add('nav_active');
    }, 100);
  } else {
    // bodyMain.classList.remove('body_overflow_hidden');
    burgerBtn.classList.remove('burger_btn_active');
    nav.classList.remove('nav_active');
    setTimeout(() => {
      nav.removeAttribute('style', 'display: flex;');
      body.removeAttribute('style', 'overflow: hidden');
    }, 300);
  }
});
