export default class Slider {
  constructor(sladerBlock) {
    this.sladerBlock = sladerBlock;
    this.slider = this.sladerBlock.querySelector('.fav_slider');
    this.slideBtn = this.sladerBlock.querySelectorAll('.fav_clider_arrow');
    this.sliderWrapper = document.querySelector('.fav_slider_wrapper');
    this.slidesElements = this.sladerBlock.querySelectorAll(
      '.fav_slider_content',
    );
    this.pagElems = document.querySelectorAll('.fav_pag_element');
    this.count = 0;
    this.timeCount = 0;
    this.isMove = false;
    this.checkWidth();
    this.changePagElem(this.count);
    this.addListners();
  }

  checkWidth() {
    const elemWidth = this.slider.offsetWidth;
    this.slidesElements.forEach((element) => {
      element.setAttribute('style', `width: ${elemWidth}px`);
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
    console.log(this.pagElems);
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
      console.log(this.sliderWrapper);
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

  addListners() {
    window.addEventListener('resize', this.checkWidth);
    this.slideBtn[0].addEventListener('click', this.slidePrev);
    this.slideBtn[1].addEventListener('click', this.slideNext);
  }
}
