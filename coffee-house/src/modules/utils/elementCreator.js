export default class ElementCreator {
  constructor(options) {
    this.element = null;
    this.createElement(options);
  }

  createElement(options) {
    this.element = document.createElement(options.tagName);
    this.setClasses(options.classNames);
    this.setContent(options.textContent, options.textHtml);
    this.setAttribute(options.attributes);
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

  setClasses(cssClasses) {
    if (cssClasses) {
      cssClasses.forEach((cssClass) => this.element.classList.add(cssClass));
    }
  }

  setAttribute(attributes) {
    if (attributes) {
      Object.keys(attributes).forEach((item) => {
        this.element.setAttribute(item, attributes[item]);
      });
    }
  }

  setContent(text, html) {
    if (html) {
      if (text) {
        this.element.innerHTML = text;
      }
    } else {
      this.element.textContent = text;
    }
  }
}
