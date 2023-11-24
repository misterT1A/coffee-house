import toElement from '../utils/HtmlToElement';
import Header from './header.html';
import './header.scss';

const header = toElement(Header);
export default { header };

const mainPageBtn = document.querySelector('.header_main_page');
const menuBtn = document.querySelector('.header_btn');
