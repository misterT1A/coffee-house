import Enjoy from './enjoy.html';
import './style.scss';
import toElement from '../../utils/HtmlToElement';

const enjoy = toElement(Enjoy);

export class Observer {
  constructor(element, options) {
    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(document.querySelector(element));
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  };
}

export default { enjoy };
