export class DesignGrid {
  constructor(options = {}) {
    this.muralSelector = options.muralSelector || '.design-mural';
    this.indicadorSelector = options.indicadorSelector || '#design-indicador';
    this.prevSelector = options.prevSelector || '#design-prev';
    this.nextSelector = options.nextSelector || '#design-next';
    this.paginaAtual = 0;
    this.totalPaginas = options.totalPaginas || 1;

    this.init();
  }

  init() {
    this.mural = document.querySelector(this.muralSelector);
    this.indicador = document.querySelector(this.indicadorSelector);
    this.prevBtn = document.querySelector(this.prevSelector);
    this.nextBtn = document.querySelector(this.nextSelector);

    this.updateIndicador();

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevPage());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextPage());
    }
  }

  updateIndicador() {
    if (this.indicador) {
      this.indicador.textContent = `Página ${this.paginaAtual + 1} de ${this.totalPaginas}`;
    }
  }

  prevPage() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.updateIndicador();
      // Adicione lógica para atualizar o mural
    }
  }

  nextPage() {
    if (this.paginaAtual < this.totalPaginas - 1) {
      this.paginaAtual++;
      this.updateIndicador();
      // Adicione lógica para atualizar o mural
    }
  }
}

// Para usar no main.js:
// import { DesignGrid } from './design-grid.js';
// const grid = new DesignGrid({ totalPaginas: 2 });