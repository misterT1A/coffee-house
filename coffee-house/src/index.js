import './index.html';
import './index.scss';

// components
import header from './modules/header/header';
import main from './modules/main/main';
import footer from './modules/footer/footer';
import BurgerMenu from './modules/header/burger';
import { Observer } from './modules/main/enjoy/enjoy';

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

const nextBtn = document.querySelectorAll('.fav_clider_arrow');
const slider = document.querySelector('.fav_slider');
const sliderWrapper = document.querySelector('.fav_slider_wrapper');
const slidesElements = document.querySelectorAll('.fav_slider_content');
const slide1 = sliderWrapper.children[0];

function checkWidth() {
  const elemWidth = slider.offsetWidth;
  slidesElements.forEach((element) => {
    element.setAttribute('style', `width: ${elemWidth}px`);
  });
}
checkWidth();
window.addEventListener('resize', checkWidth);
// const slide2 = sliderWrapper.children[1];
// const slide3 = sliderWrapper.children[2];

// const arrSlides = [slide1, slide2, slide3];

// console.log(arrSlides);
nextBtn[0].addEventListener('click', () => {
  const slide = sliderWrapper.children[0];
  // sliderWrapper.append(slide2);
  sliderWrapper.classList.add('slide_next');
  setTimeout(() => {
    sliderWrapper.classList.remove('slide_next');
    sliderWrapper.children[0].remove();
    sliderWrapper.append(slide);
    // console.log(sliderWrapper.children[0]);
  }, 650);
});

nextBtn[1].addEventListener('click', () => {
  const slide = sliderWrapper.children[2];
  // sliderWrapper.before(slide);
  sliderWrapper.classList.add('slide_prev');
  setTimeout(() => {
    sliderWrapper.classList.remove('slide_prev');
    sliderWrapper.children[2].remove();
    sliderWrapper.prepend(slide);
    // console.log(sliderWrapper.children[0]);
  }, 650);
});
