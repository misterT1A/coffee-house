import ElementCreator from './elementCreator';
import img from '../../img/assets';

export default class MenuElementConstructor {
  constructor(options) {
    this.options = options;
    this.element = null;
    this.configure1();
    this.configure2();
    this.configure3();
  }

  getMenuElement() {
    return this.element.getElement();
  }

  configure1() {
    const param = {
      tagName: 'div',
      classNames: ['menu_item'],
      textContent: null,
      attributes: null,
      callback: null,
    };
    this.element = new ElementCreator(param);
  }

  configure2() {
    const param1 = {
      tagName: 'div',
      classNames: ['menu_item_img'],
      textContent: null,
      attributes: null,
      callback: null,
    };
    const element1 = new ElementCreator(param1);

    const categoryList = Object.keys(img).filter(
      (elem) => elem.replace(/[0-9]/g, '') === `${this.options.category}`,
    );

    const param2 = {
      tagName: 'img',
      classNames: null,
      textContent: null,
      attributes: {
        src: img[categoryList[parseInt(this.options.pathImg, 10) - 1]],
        alt: this.options.category,
      },
      callback: null,
    };

    const element2 = new ElementCreator(param2);
    element1.getElement().append(element2.getElement());
    this.element.getElement().append(element1.getElement());
  }

  configure3() {
    const param = {
      tagName: 'div',
      classNames: ['menu_item_content'],
      textContent: null,
      attributes: null,
      callback: null,
    };
    const element = new ElementCreator(param);

    const param1 = {
      tagName: 'div',
      classNames: ['menu_item_title'],
      textContent: this.options.name,
      attributes: null,
      callback: null,
    };
    const element1 = new ElementCreator(param1);
    const param2 = {
      tagName: 'div',
      classNames: ['menu_item_desription'],
      textContent: this.options.description,
      attributes: null,
      callback: null,
    };
    const element2 = new ElementCreator(param2);
    const param3 = {
      tagName: 'div',
      classNames: ['menu_item_price'],
      textContent: `$${this.options.price}`,
      attributes: null,
      callback: null,
    };
    const element3 = new ElementCreator(param3);
    element
      .getElement()
      .append(
        element1.getElement(),
        element2.getElement(),
        element3.getElement(),
      );
    this.element.getElement().append(element.getElement());
  }
}
