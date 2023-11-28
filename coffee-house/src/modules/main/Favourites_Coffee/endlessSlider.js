export default class Slider {
  constructor(sladerBlock) {
    this.sladerBlock = sladerBlock;
    this.slider = this.sladerBlock.querySelector('.fav_slider');
    this.sliderContent = this.sladerBlock.querySelectorAll(
      '.fav_slider_content_inner',
    );
    this.slideBtn = this.sladerBlock.querySelectorAll('.arrowBtn');
    this.sliderWrapper = document.querySelector('.fav_slider_wrapper');
    this.slidesElements = this.sladerBlock.querySelectorAll(
      '.fav_slider_content',
    );
    this.pagElems = document.querySelectorAll('.fav_pag_element');
    this.count = 0;
    this.timeCount = 0;
    this.isMove = false;
    this.isOnView = false;
    this.elemWidth = 0;
    this.midleElem = 0;
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
    this.midleElem = this.elemWidth / 2;
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

  slideNext() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;

      if (this.count >= 2) {
        this.count = 0;
      } else {
        this.count += 1;
      }
      const slide = this.sliderWrapper.children[0];
      this.sliderWrapper.classList.add('slide_next');
      this.changePagElem(this.count);
      setTimeout(() => {
        this.sliderWrapper.classList.remove('slide_next');
        this.sliderWrapper.children[0].remove();
        this.sliderWrapper.append(slide);
        this.isMove = false;
      }, 650);
    }
  }

  slidePrev() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;

      if (this.count <= 0) {
        this.count = 2;
      } else {
        this.count -= 1;
      }

      const slide = this.sliderWrapper.children[2];
      this.sliderWrapper.classList.add('slide_prev');
      this.changePagElem(this.count);
      setTimeout(() => {
        this.sliderWrapper.classList.remove('slide_prev');
        this.sliderWrapper.children[2].remove();
        this.sliderWrapper.prepend(slide);
        this.isMove = false;
      }, 650);
    }
  }

  swipeStart(event) {
    this.midleElem = this.elemWidth / 2;
    this.posStart = event.touches[0].clientX;
  }

  swipeMove(event) {
    this.posEnd = event.touches[0].clientX;
  }

  swipeEnd(event) {
    if (this.posStart - this.posEnd > 0) {
      this.slideNext();
    } else {
      this.slidePrev();
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
      this.swipeStart(event);
    });
    this.slider.addEventListener('touchmove', (event) => {
      this.swipeMove(event);
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
    this.sliderContent.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
        if (this.isOnView) {
          clearInterval(this.autoInterval);
        }
      });

      elem.addEventListener('mouseout', () => {
        if (this.isOnView) {
          this.autoInterval = setInterval(
            () => this.timeInterval(this.pagElems),
            125,
          );
        }
      });
    });
  }
}
