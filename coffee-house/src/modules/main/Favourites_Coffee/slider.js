export default class Slider {
  constructor(sliderBlock) {
    this.sliderBlock = sliderBlock;
    this.slider = this.sliderBlock.querySelector('.fav_slider');
    this.sliderContent = this.sliderBlock.querySelectorAll(
      '.fav_slider_content_inner',
    );
    this.slideBtn = this.sliderBlock.querySelectorAll('.arrowBtn');
    this.sliderWrapper = document.querySelector('.fav_slider_wrapper');
    this.slidesElements = this.sliderBlock.querySelectorAll(
      '.fav_slider_content',
    );
    this.pagElems = document.querySelectorAll('.fav_pag_element');
    this.count = 0;
    this.timeCount = 0;
    this.isMove = false;
    this.isSwipeMouse = false;
    this.isOnView = false;
    this.elemWidth = 0;
    this.posStart = 0;
    this.posX1 = 0;
    this.posX2 = 0;
    this.posEnd = 0;
    this.checkWidth();
    this.changePagElem(this.count);
    this.addListners();
  }

  checkWidth() {
    this.elemWidth = this.slider.offsetWidth;
    this.slidesElements.forEach((element) => {
      element.setAttribute('style', `width: ${this.elemWidth}px`);
    });
  }

  changePagElem(counter) {
    this.pagElems.forEach((elem) => {
      if (elem.classList.contains('fav_pag_active')) {
        elem.classList.remove('fav_pag_hover');
        elem.classList.remove('fav_pag_active');
        elem.children[0].setAttribute('style', 'width: 0');
      }
    });
    this.pagElems[counter].classList.add('fav_pag_active');
  }

  changeTransform() {
    const slide = this.sliderWrapper;
    const widthCount = 33.3 * this.count;
    slide.setAttribute('style', `transform: translateX(${-widthCount}%)`);
    this.changePagElem(this.count);
    this.isMove = false;
  }

  slideNext() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;
      if (this.count >= 2) {
        this.count = 0;
        this.changeTransform();
      } else {
        this.count += 1;
        this.changeTransform();
      }
    }
  }

  slidePrev() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;

      if (this.count <= 0) {
        this.count = 2;
        this.changeTransform();
      } else {
        this.count -= 1;
        this.changeTransform();
      }
    }
  }

  swipeStartMouse(event) {
    this.posStartX = event.clientX;
    this.posStartY = event.clientY;
  }

  swipeStartTouch(event) {
    this.posStartX = event.touches[0].clientX;
    this.posStartY = event.touches[0].clientY;
  }

  swipeMoveMouse(event) {
    this.posEndX = event.clientX;
    this.posEndY = event.clientY;
  }

  swipeMoveTouch(event) {
    this.posEndX = event.touches[0].clientX;
    this.posEndY = event.touches[0].clientY;
  }

  swipeEnd(event) {
    console.log(this.posStart);
    console.log(this.posEnd);
    if (
      Math.abs(this.posStartX - this.posEndX) > 30 &&
      Math.abs(this.posStartY - this.posEndY) < 50
    ) {
      if (this.posStartX - this.posEndX > 0) {
        this.slideNext();
      } else {
        this.slidePrev();
      }
    }
  }

  timeInterval(elements) {
    elements.forEach((elem) => {
      if (elem.classList.contains('fav_pag_active')) {
        if (this.timeCount <= 110) {
          this.timeCount += 2.5;
          elem.children[0].setAttribute('style', `width: ${this.timeCount}%`);
        } else {
          this.timeCount = 0;
          elem.children[0].setAttribute('style', `width: ${this.timeCount}%`);
          elem.children[0].classList.add('fav_pag_hover');
          setTimeout(() => {
            elem.children[0].classList.remove('fav_pag_hover');
          }, 800);
          this.slideNext();
        }
      } else {
        elem.children[0].setAttribute('style', `width: 0%`);
      }
    });
  }

  callbackObserver(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        this.isOnView = false;
        clearInterval(this.autoInterval);
      } else {
        this.isOnView = true;
        this.autoInterval = setInterval(
          () => this.timeInterval(this.pagElems),
          125,
        );
      }
    });
  }

  startObserver() {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    this.observerSlider = new IntersectionObserver(
      this.callbackObserver.bind(this),
      this.options,
    );
    this.observerSlider.observe(this.slider);
  }

  addListners() {
    window.addEventListener('resize', this.checkWidth.bind(this));
    window.addEventListener('load', this.startObserver.bind(this));
    this.slideBtn[0].addEventListener('click', this.slidePrev.bind(this));
    this.slideBtn[1].addEventListener('click', this.slideNext.bind(this));
    this.slider.addEventListener('touchstart', (event) => {
      if (this.isOnView) {
        clearInterval(this.autoInterval);
      }
      this.swipeStartTouch(event);
    });
    this.slider.addEventListener('touchmove', (event) => {
      this.swipeMoveTouch(event);
    });
    this.slider.addEventListener('touchend', (event) => {
      if (this.isOnView) {
        this.autoInterval = setInterval(
          () => this.timeInterval(this.pagElems),
          125,
        );
      }
      this.swipeEnd(event);
    });
    this.slider.addEventListener('mousedown', (event) => {
      if (this.isOnView) {
        if (!this.isSwipeMouse) {
          this.isSwipeMouse = true;
          clearInterval(this.autoInterval);
        }
      }
      this.swipeStartMouse(event);
    });
    this.slider.addEventListener('mousemove', (event) => {
      this.swipeMoveMouse(event);
    });
    this.slider.addEventListener('mouseup', (event) => {
      if (this.isOnView) {
        if (
          event.target.classList.contains('fav_slider_content_inner') ||
          event.target.closest('.fav_slider_content_inner')
        ) {
          this.swipeEnd(event);
          this.isSwipeMouse = false;
        } else if (this.isSwipeMouse) {
          this.swipeEnd(event);
          this.autoInterval = setInterval(
            () => this.timeInterval(this.pagElems),
            125,
          );
          this.isSwipeMouse = false;
        }
      }
    });
    this.sliderContent.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
        if (this.isOnView) {
          if (!this.isSwipeMouse) {
            clearInterval(this.autoInterval);
          }
        }
      });

      elem.addEventListener('mouseout', () => {
        if (this.isOnView) {
          if (!this.isSwipeMouse) {
            this.autoInterval = setInterval(
              () => this.timeInterval(this.pagElems),
              125,
            );
          }
        }
      });
    });
  }
}
