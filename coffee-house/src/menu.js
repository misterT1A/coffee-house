import './menu.html';
import './index.scss';
import header from './modules/header/header';
import menu from './modules/menu/menu';
import footer from './modules/footer/footer';

const bodyMenu = document.querySelector('body');
bodyMenu.append(header.header, menu.menu, footer.footer);

const menuBtn = document.querySelector('.header_btn');
menuBtn.classList.add('menu_active');
