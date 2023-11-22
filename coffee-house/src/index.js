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
const slideBtn = document.querySelectorAll('.fav_clider_arrow');
const slider = document.querySelector('.fav_slider');
const sliderWrapper = document.querySelector('.fav_slider_wrapper');
const slidesElements = document.querySelectorAll('.fav_slider_content');
const pagElems = document.querySelectorAll('.fav_pag_element');
const pagTimeElems = document.querySelectorAll('.fav_pag_time');
const slide1 = sliderWrapper.children[0];
const count = 0;
const timeCount = 0;
const isMove = false;

const xx = new Slider(sladerBlock);
// console.log(xx.slider);

// function changePagElem(counter) {
//   pagElems.forEach((elem) => {
//     if (elem.classList.contains('fav_pag_active')) {
//       elem.classList.remove('fav_pag_hover');
//       elem.classList.remove('fav_pag_active');
//       elem.children[0].setAttribute('style', 'width: 0');
//     }
//   });
//   pagElems[counter].classList.add('fav_pag_active');
//   // pagElems[counter].classList.add('fav_pag_hover');
// }

// function checkWidth() {
//   const elemWidth = slider.offsetWidth;
//   slidesElements.forEach((element) => {
//     element.setAttribute('style', `width: ${elemWidth}px`);
//   });
// }
// checkWidth();
// changePagElem(count);

// function slideNext() {
//   if (!isMove) {
//     isMove = true;
//     timeCount = 0;

//     if (count >= 2) {
//       count = 0;
//     } else {
//       count += 1;
//     }
//     const slide = sliderWrapper.children[0];
//     sliderWrapper.classList.add('slide_next');
//     changePagElem(count);
//     // pagElems[count].classList.add('fav_pag_hover');
//     setTimeout(() => {
//       sliderWrapper.classList.remove('slide_next');
//       sliderWrapper.children[0].remove();
//       sliderWrapper.append(slide);
//       isMove = false;
//     }, 650);
//   }
// }

// window.addEventListener('resize', checkWidth);
// slideBtn[1].addEventListener('click', slideNext);

// function slidePrev() {
//   if (!isMove) {
//     isMove = true;
//     timeCount = 0;

//     if (count <= 0) {
//       count = 2;
//     } else {
//       count -= 1;
//     }

//     const slide = sliderWrapper.children[2];
//     sliderWrapper.classList.add('slide_prev');
//     changePagElem(count);
//     // pagElems[count].classList.add('fav_pag_hover');
//     setTimeout(() => {
//       sliderWrapper.classList.remove('slide_prev');
//       sliderWrapper.children[2].remove();
//       sliderWrapper.prepend(slide);
//       isMove = false;
//     }, 650);
//   }
// }

// slideBtn[0].addEventListener('click', slidePrev);

// function timeInterval() {
//   pagElems.forEach((elem) => {
//     if (elem.classList.contains('fav_pag_active')) {
//       if (timeCount <= 110) {
//         timeCount += 2.5;
//         elem.children[0].setAttribute('style', `width: ${timeCount}%`);
//       } else {
//         timeCount = 0;
//         elem.children[0].setAttribute('style', `width: ${timeCount}%`);
//         elem.children[0].classList.add('fav_pag_hover');
//         setTimeout(() => {
//           elem.children[0].classList.remove('fav_pag_hover');
//         }, 800);
//         slideNext();
//       }
//     } else {
//       elem.children[0].setAttribute('style', `width: 0%`);
//     }
//   });
// }

// let interval = setInterval(timeInterval, 125);

// slider.addEventListener('mouseover', () => {
//   clearInterval(interval);
// });

// slider.addEventListener('mouseout', () => {
//   interval = setInterval(timeInterval, 125);
// });

// const optionsSlider = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.2,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(
//         'Элемент пересёк границу области и всё ещё соприкасается с ней!',
//       );
//       console.log(interval);
//       interval = setInterval(timeInterval, 125);
//       // observer.unobserve(entry.target);
//     } else {
//       console.log(interval);
//       clearInterval(interval);
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, optionsSlider);

// observer.observe(slider);
