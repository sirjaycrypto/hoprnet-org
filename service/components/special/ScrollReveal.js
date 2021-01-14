import React from 'react';

import { throttle } from 'lodash';
class ScrollReveal extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
      revealEl: [],
    };

    this.checkComplete = () => {
      return (
        this.state.revealEl.length <=
        document.querySelectorAll('[class*=reveal-].is-revealed').length
      );
    };
    this.elementIsVisible = (el, offset) => {
      return (
        el.getBoundingClientRect().top <= this.state.viewportHeight - offset
      );
    };

    this.revealElements = () => {
      if (this.checkComplete()) return;
      for (let i = 0; i < this.state.revealEl.length; i++) {
        let el = this.state.revealEl[i];
        let revealDelay = el.getAttribute('data-reveal-delay');
        let revealOffset = el.getAttribute('data-reveal-offset')
          ? el.getAttribute('data-reveal-offset')
          : '200';
        let listenedEl = el.getAttribute('data-reveal-container')
          ? el.closest(el.getAttribute('data-reveal-container'))
          : el;
        if (
          this.elementIsVisible(listenedEl, revealOffset) &&
          !el.classList.contains('is-revealed')
        ) {
          if (revealDelay && revealDelay !== 0) {
            setTimeout(function () {
              el.classList.add('is-revealed');
            }, revealDelay);
          } else {
            el.classList.add('is-revealed');
          }
        }
      }
    };

    this.init = () => {
      setTimeout(() => {
        this.setState(
          { revealEl: document.querySelectorAll('[class*=reveal-]') },
          () => {
            if (!this.checkComplete()) {
              window.addEventListener('scroll', this.handleScroll);
              window.addEventListener('resize', this.handleResize);
            }
            this.revealElements();
          }
        );
      }, 100);
    };
    this.handleListeners = () => {
      if (!this.checkComplete()) return;
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    };
    this.handleScroll = throttle(() => {
      this.handleListeners();
      this.revealElements();
    }, 30);
    this.handleResize = throttle(() => {
      this.setState({ viewportHeight: window.innerHeight }, () => {
        this.handleListeners();
        this.revealElements();
      });
    }, 30);
  }
  render() {
    return React.createElement(React.Fragment, null, this.props.children());
  }
}

export default ScrollReveal;
