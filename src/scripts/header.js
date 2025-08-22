export class Header {
  constructor(options = {}) {
    this.headerSelector = options.headerSelector || '.header';
    this.hamburgerSelector = options.hamburgerSelector || '.hamburger';
    this.navLinksSelector = options.navLinksSelector || '.nav-links';
    this.activeClass = options.activeClass || 'active';

    this.header = document.querySelector(this.headerSelector);
    this.hamburger = document.querySelector(this.hamburgerSelector);
    this.navLinks = document.querySelector(this.navLinksSelector);

    this.init();
  }

  init() {
    if (this.hamburger && this.navLinks) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
      // Fecha o menu ao clicar em qualquer link
      this.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          this.navLinks.classList.remove(this.activeClass);
        });
      });
    }
    window.addEventListener('scroll', () => this.updateHeader());
    window.addEventListener('load', () => this.updateHeader());
  }

  toggleMenu() {
    this.navLinks.classList.toggle(this.activeClass);
  }

  updateHeader() {
    if (!this.header) return;
    if (window.scrollY > 0) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }
}