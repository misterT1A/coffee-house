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
