import './menu.html';
import './index.scss';
import Products from './products.json';
import header from './modules/header/header';
import menu from './modules/menu/menu';
import footer from './modules/footer/footer';
import BurgerMenu from './modules/header/burger';
import MenuConstructor from './modules/utils/menuConstructor';
import Modal from './modules/utils/modal/modal';

const bodyMenu = document.querySelector('body');
bodyMenu.append(header.header, menu.menu, footer.footer);

const menuBtn = document.querySelector('.header_btn');
// eslint-disable-next-line no-script-url
menuBtn.setAttribute('href', 'javascript:void(0)');
menuBtn.classList.add('menu_active');

// burger
const { body } = document;
const navTogleMenu = new BurgerMenu(body);

// menu constructor
const menuWrapper = document.querySelector('.menu_wrapper');
const menuContent = new MenuConstructor(menuWrapper, Products);

// modal
document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('menu_item') ||
    e.target.closest('.menu_item')
  ) {
    const item = e.target.closest('.menu_item');
    const modal = new Modal(body, item);
    body.append(modal.element);
    body.classList.add('body_hidden');
  }
});
// =====
