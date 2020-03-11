'use strict'

class ProgressBar {
  constructor(options = {}) {
    const {
      start = 0,
      end = 100,
      bg = 'green',
      border = '1px solid black',
      height = '25',
      textColor = 'white',
      margin = '15',
      showText = true,
    } = options;

  this.start = start;
  this.end = end;
  this.bg = bg;
  this.border = border;
  this.height = height;
  this.margin = margin;
  this.textColor = textColor;
  this.showText = showText;
  }

  init(selector) {
    document.querySelector(selector).append(this.createProgressBar());
  }
  createProgressBar() {
    const progressbar = document.createElement('div');
    const innerBar = this.createInnerBar();
    progressbar.append(innerBar);
    progressbar.style.width = '80%';
    progressbar.style.border = this.border;
    progressbar.style.margin = `${this.margin}px`;
    this.animateBar(innerBar);
    return progressbar;
  }
  createInnerBar() {
    const innerBar = document.createElement('div');
    innerBar.style.cssText = `
      text-align: center;
      background-color: ${this.bg};
      height: ${this.height}px;
      line-height: ${this.height}px;
      color: ${this.textColor};
    `;
    return innerBar;
    }
  stateBar(elem) {
    elem.style.width = `${this.start}%`;
    elem.textContent = `${this.showText ? this.start + '%' : ''}`;
  }
  animateBar(innerBar) {
    const animate = () => {
      if(this.start < this.end) {
        this.start++;
        this.stateBar(innerBar);
        requestAnimationFrame(animate);
      }
    }
    // requestAnimationFrame(animate);
    animate();
  }
}

class RoundedProgressBar extends ProgressBar {
  constructor(options = {}) {
    super(options);
    const { rounded } = options;
    this.rounded = rounded;
  }

  createProgressBar() {
    const progressbar = super.createProgressBar();
    this.roundedBar(progressbar);
    return progressbar;
  }
  roundedBar(elem) {
    // elem.firstChild.style.borderRadius = this.rounded;
    elem.style.overflow = 'hidden';
    elem.style.borderRadius = this.rounded;
  }
}











