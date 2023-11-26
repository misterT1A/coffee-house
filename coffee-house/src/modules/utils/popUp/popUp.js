import PopUpHtml from './popUp.html';
import ElementCreator from '../elementCreator';
import img from '../../../img/assets';
import './popUp.scss';
import Products from '../../../products.json';

export default class PopUp {
  constructor(body, item) {
    this.body = body;
    this.item = item;
    this.element = null;
    this.priceSize = 0;
    this.priceAdd = 0;
    this.configure(this.body);
    this.addListners();
  }

  getPopUpElement() {
    return this.element.getElement();
  }

  configure(wrapper) {
    this.element = document.createElement('template');
    this.element.innerHTML = PopUpHtml;
    this.changeContent(this.element.content.firstChild);
    this.element.content.firstChild.classList.add('modal_open');
    wrapper.append(this.element.content.firstChild);
  }

  changeContent(element) {
    const targetItem = Products.filter(
      (elem) => elem.name === this.item.dataset.name,
    );
    const targetItemObj = { ...targetItem }[0];
    this.targetContent = targetItemObj;
    const container = element.children[0].children[0].children[1];
    this.containerItem = container;
    this.changeName(container.children[0], targetItemObj);
    this.changeDescription(container.children[0], targetItemObj);
    this.changeDefaultPrice(container.children[3], targetItemObj);
  }

  changeName(containerText, targetText) {
    const item = containerText.children[0];
    item.textContent = targetText.name;
  }

  changeDescription(containerText, targetText) {
    const item = containerText.children[1];
    item.textContent = targetText.description;
  }

  changeDefaultPrice(containerText, targetText) {
    const item = containerText.children[1];
    const { price } = targetText;
    item.textContent = price;
    this.defaultPrice = price;
    this.priceSize = +this.defaultPrice;
  }

  changePriceSize(containerItem, btn, targetContent) {
    const priceText = containerItem.children[3].children[1];
    const countBtn = btn.dataset.size;
    const addPrice = targetContent.sizes[countBtn]['add-price'];
    this.priceSize = (+this.defaultPrice + +addPrice).toFixed(2);
    priceText.textContent = `$${(+this.priceSize + +this.priceAdd).toFixed(2)}`;
  }

  changePriceAdd(containerItem, btn, targetContent, isAddPrice) {
    const priceText = containerItem.children[3].children[1];
    const countBtn = btn.dataset.add;
    const [addPrice] = targetContent.additives.filter(
      (element) => element.name === countBtn,
    );
    if (isAddPrice) {
      this.priceAdd = +this.priceAdd + +addPrice['add-price'];
    } else {
      this.priceAdd = +this.priceAdd - +addPrice['add-price'];
    }
    priceText.textContent = `$${(+this.priceSize + +this.priceAdd).toFixed(2)}`;
  }

  addToContainer() {
    this.body.append(this.element.getElement());
  }

  addListners() {
    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('size_btn') ||
        e.target.closest('.size_btn')
      ) {
        this.changePriceSize(
          this.containerItem,
          e.target.closest('.size_btn'),
          this.targetContent,
        );
      }
    });
    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('add_btn') ||
        e.target.closest('.add_btn')
      ) {
        if (
          e.target
            .closest('.add_btn')
            .classList.contains('modal_active_checkbox')
        ) {
          e.target
            .closest('.add_btn')
            .classList.remove('modal_active_checkbox');
          this.changePriceAdd(
            this.containerItem,
            e.target.closest('.add_btn'),
            this.targetContent,
            false,
          );
        } else {
          e.target.closest('.add_btn').classList.add('modal_active_checkbox');
          this.changePriceAdd(
            this.containerItem,
            e.target.closest('.add_btn'),
            this.targetContent,
            true,
          );
        }
      }
    });
    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('modal_button_close') ||
        e.target.closest('.modal_button_close')
      ) {
        console.log(e.target.closest('.modal_button_close'));
      }
    });
  }
}
