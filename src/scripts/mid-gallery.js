export class MidGallery {
  constructor({ containerSelector = '.mid-gallery', images = [], columns = 3 }) {
    this.container = document.querySelector(containerSelector);
    this.images = images;
    this.columns = columns;

    this.init();
  }

  init() {
    if (!this.container || this.images.length === 0) return;

    this.container.classList.add('mid-gallery');
    this.renderImages();
  }

  renderImages() {
    this.container.innerHTML = '';

    this.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('mid-gallery__image');
      this.container.appendChild(img);
    });
  }
}