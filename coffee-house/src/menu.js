import './menu.html';
import './index.scss';
import Products from './products.json';
import header from './modules/header/header';
import menu from './modules/menu/menu';
import footer from './modules/footer/footer';
import BurgerMenu from './modules/header/burger';
import MenuConstructor from './modules/utils/menuConstructor';
import Modal from './modules/utils/modal/modal';

const { body } = document;
body.append(header.header, menu.menu, footer.footer);

// disabled menu link
const menuBtn = document.querySelector('.header_btn');
menuBtn.addEventListener('click', (e) => e.preventDefault());
menuBtn.classList.add('menu_active');

// burger
const navTogleMenu = new BurgerMenu();

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
