import './index.html';
import './index.scss';

// components
import header from './modules/header/header';
import main from './modules/main/main';
import footer from './modules/footer/footer';
import BurgerMenu from './modules/header/burger';
import { Observer } from './modules/main/enjoy/enjoy';
import Slider from './modules/main/Favourites_Coffee/slider';
// import ObserverSlider from './modules/main/Favourites_Coffee/slider';

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
// burger
const { body } = document;
const navTogle = new BurgerMenu(body);
// ===

// video perfomans

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

window.addEventListener(
  'load',
  (event) => {
    const observe = new Observer('#video', options);
  },
  false,
);
// =====
// slider
const sladerBlock = document.querySelector('.favorites_slider_wrapper');
const slider = new Slider(sladerBlock);
// ==
