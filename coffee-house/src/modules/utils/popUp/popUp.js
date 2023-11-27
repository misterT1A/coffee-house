import PopUpHtml from './popUp.html';
import img from '../../../img/assets';
import './popUp.scss';
import Products from '../../../products.json';
import toElement from '../HtmlToElement';

export default class PopUp {
  constructor(body, item) {
    this.body = body;
    this.item = item;
    this.element = null;
    this.priceSize = 0;
    this.priceAdd = 0;
    this.listSize = this.lisnerSizeBtns.bind(this);
    this.listAdd = this.listnerAddBtns.bind(this);
    this.closeBlock = this.closeModal.bind(this);
    this.configure(this.body);
    this.addListners();
  }

  getPopUpElement() {
    return this.element.getElement();
  }

  configure(wrapper) {
    this.element = toElement(PopUpHtml);
    this.changeContent(this.element);
    wrapper.append(this.element);
    setTimeout(() => this.element.classList.add('modal_open'), 300);
  }

  changeContent(element) {
    const targetItem = Products.filter(
      (elem) => elem.name === this.item.dataset.name,
    );
    const targetItemObj = { ...targetItem }[0];
    this.targetContent = targetItemObj;
    const container = element.children[0].children[0].children[1];
    this.containerItem = container;
    this.changeItem(element.children[0].children[0].children[0], targetItemObj);
    this.changeName(container.children[0], targetItemObj);
    this.changeDescription(container.children[0], targetItemObj);
    this.changeDefaultPrice(container.children[3], targetItemObj);
    this.changeSizeContent(this.containerItem, targetItemObj);
    this.changeAddContent(this.containerItem, targetItemObj);
  }

  changeItem(containerText, targetText) {
    const imgUrl = containerText.children[0];
    const categoryList = Object.keys(img).filter(
      (elem) => elem.replace(/[0-9]/g, '') === `${targetText.category}`,
    );
    imgUrl.setAttribute(
      'src',
      img[categoryList[parseInt(targetText.pathImg, 10) - 1]],
    );
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
    item.textContent = `$${price}`;
    this.defaultPrice = price;
    this.priceSize = +this.defaultPrice;
  }

  changeSizeContent(containerItem, targetContent) {
    const sizeContent = containerItem.children[1].children[1];
    [...sizeContent.children].forEach((elem, index) => {
      if (index % 2 !== 0) {
        const elemContent = elem.children[1];
        elemContent.textContent =
          targetContent.sizes[elem.children[0].textContent.toLowerCase()].size;
      }
    });
  }

  changeAddContent(containerItem, targetContent) {
    const sizeContent = containerItem.children[2].children[1];
    [...sizeContent.children].forEach((elem, index) => {
      if (index % 2 !== 0) {
        const elemContent = elem.children[1];
        const targeTexttContent = elem.children[0].textContent - 1;
        elemContent.textContent =
          targetContent.additives[targeTexttContent].name;
        elem.setAttribute(
          'data-add',
          `${targetContent.additives[targeTexttContent].name}`,
        );
      }
    });
  }

  calcPriceSize(containerItem, btn, targetContent) {
    const priceText = containerItem.children[3].children[1];
    const countBtn = btn.dataset.size;
    const addPrice = targetContent.sizes[countBtn]['add-price'];
    this.priceSize = (+this.defaultPrice + +addPrice).toFixed(2);
    priceText.textContent = `$${(+this.priceSize + +this.priceAdd).toFixed(2)}`;
  }

  calcPriceAdd(containerItem, btn, targetContent, isAddPrice) {
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

  lisnerSizeBtns(e) {
    if (
      e.target.classList.contains('size_btn') ||
      e.target.closest('.size_btn')
    ) {
      this.calcPriceSize(
        this.containerItem,
        e.target.closest('.size_btn'),
        this.targetContent,
      );
    }
  }

  listnerAddBtns(e) {
    if (
      e.target.classList.contains('add_btn') ||
      e.target.closest('.add_btn')
    ) {
      if (
        e.target.closest('.add_btn').classList.contains('modal_active_checkbox')
      ) {
        e.target.closest('.add_btn').classList.remove('modal_active_checkbox');
        this.calcPriceAdd(
          this.containerItem,
          e.target.closest('.add_btn'),
          this.targetContent,
          false,
        );
      } else {
        e.target.closest('.add_btn').classList.add('modal_active_checkbox');
        this.calcPriceAdd(
          this.containerItem,
          e.target.closest('.add_btn'),
          this.targetContent,
          true,
        );
      }
    }
  }

  closeModal(e) {
    if (
      e.target.classList.contains('modal_button_close') ||
      e.target.closest('.modal_button_close')
    ) {
      e.target.closest('.modal').classList.remove('modal_open');
      document.body.classList.remove('bodi_hidden');
      this.closeModalBlock(e);
    }
  }

  closeModalBlock(e) {
    this.deleteListner();

    setTimeout(() => {
      e.target.closest('.modal').remove();
    }, 300);
  }

  deleteListner() {
    document.removeEventListener('click', this.listSize);
    document.removeEventListener('click', this.listAdd);
    document.removeEventListener('click', this.closeBlock);
  }

  addListners() {
    document.addEventListener('click', this.listSize);
    document.addEventListener('click', this.listAdd);
    document.addEventListener('click', this.closeBlock);
  }
}
