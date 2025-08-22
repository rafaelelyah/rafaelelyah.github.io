export class IlustracaoGrid {
  constructor(options = {}) {
    this.galleryPopup = document.getElementById(options.popupId || "gallery-popup");
    this.galleryContent = document.querySelector(options.contentSelector || ".gallery-content");
    this.closeGalleryBtn = document.getElementById(options.closeBtnId || "close-gallery");
    this.conceptArtBtn = document.getElementById(options.conceptArtId || "concept-art");
    this.artisticaBtn = document.getElementById(options.artisticaId || "artistica");
    this.dataUrl = options.dataUrl || "assets/data/ilustracao.json";
    this.fadeDuration = options.fadeDuration || 300;

    this.init();
  }

  init() {
    if (this.closeGalleryBtn) {
      this.closeGalleryBtn.addEventListener("click", () => this.closeGalleryPopup());
    }

    fetch(this.dataUrl)
      .then(res => res.json())
      .then(data => {
        if (this.conceptArtBtn) {
          this.conceptArtBtn.addEventListener("click", () => this.openGallery(data.conceptArt));
        }
        if (this.artisticaBtn) {
          this.artisticaBtn.addEventListener("click", () => this.openGallery(data.artistica));
        }
      });
  }

  openGallery(images) {
    if (!this.galleryContent || !this.galleryPopup) return;
    this.galleryContent.innerHTML = "";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Ilustração";
      this.galleryContent.appendChild(img);
    });

    this.galleryPopup.classList.remove("hidden");
    this.galleryPopup.classList.add("fade-in");
    document.body.classList.add("galeria-ativa");
    document.body.style.overflow = "hidden";
  }

  closeGalleryPopup() {
    if (!this.galleryPopup) return;
    this.galleryPopup.classList.remove("fade-in");
    this.galleryPopup.classList.add("fade-out");

    setTimeout(() => {
      this.galleryPopup.classList.add("hidden");
      this.galleryPopup.classList.remove("fade-out");
    }, this.fadeDuration);

    document.body.classList.remove("galeria-ativa");
    document.body.style.overflow = "";
  }
}

// Para usar no main.js:
// import { IlustracaoGrid } from './ilustracao-grid.js';
// const ilustracaoGrid = new IlustracaoGrid();