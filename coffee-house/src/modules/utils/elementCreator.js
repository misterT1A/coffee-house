export default class ElementCreator {
  constructor(param) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param) {
    this.element = document.createElement(param.tagName);
    this.setCssClasses(param.classNames);
    this.setTextContent(param.textContent, param.textHtml);
    this.setCallback(param.callback);
    this.setAllAttribute(param.attributes);
  }

  getElement() {
    return this.element;
  }

  addInnerElement(...elements) {
    elements.forEach((elem) => {
      if (elem instanceof ElementCreator) {
        this.element.append(elem.getElement());
      } else {
        this.element.append(elem);
      }
    });
  }

  setCssClasses(cssClasses) {
    if (cssClasses) {
      cssClasses.forEach((cssClass) => this.element.classList.add(cssClass));
    }
  }

  setAllAttribute(attributes) {
    if (attributes) {
      Object.keys(attributes).forEach((item) => {
        this.element.setAttribute(item, attributes[item]);
      });
    }
  }

  setTextContent(text, html) {
    if (html) {
      if (text) {
        this.element.innerHTML = text;
      }
    } else {
      this.element.textContent = text;
    }
  }

  setCallback(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }
}
