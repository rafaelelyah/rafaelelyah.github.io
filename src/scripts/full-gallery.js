// full-gallery.js
export class FullGallery {
  constructor({ containerSelector = '.full-gallery', images = [], indicadorSelector, prevSelector, nextSelector }) {
    this.container = document.querySelector(containerSelector);
    this.images = images;
    this.indicador = document.querySelector(indicadorSelector);
    this.prevBtn = document.querySelector(prevSelector);
    this.nextBtn = document.querySelector(nextSelector);
    this.paginaAtual = 0;

    this.init();
  }

  init() {
    if (!this.container || this.images.length === 0) return;

    this.renderPage();
    this.updateIndicador();

    this.prevBtn?.addEventListener('click', () => this.prevPage());
    this.nextBtn?.addEventListener('click', () => this.nextPage());
  }

  renderPage() {
    this.container.innerHTML = '';

    const img = document.createElement('img');
    img.src = this.images[this.paginaAtual];
    img.classList.add('full-gallery__image');

    this.container.appendChild(img);
  }

  updateIndicador() {
    if (this.indicador) {
      this.indicador.textContent = `Página ${this.paginaAtual + 1} de ${this.images.length}`;
    }
  }

  prevPage() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.renderPage();
      this.updateIndicador();
    }
  }

  nextPage() {
    if (this.paginaAtual < this.images.length - 1) {
      this.paginaAtual++;
      this.renderPage();
      this.updateIndicador();
    }
  }
}