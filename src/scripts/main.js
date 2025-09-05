import { Header } from './header.js';
import { FullGallery } from './full-gallery.js';
import { MidGallery } from './mid-gallery.js';
import '../styles/main.scss';

// Inicializa o header com comportamento de scroll e menu
const header = new Header({
  headerSelector: '.header',
  hamburgerSelector: '.hamburger',
  navLinksSelector: '.nav-links',
  activeClass: 'active'
});

// Inicializa a galeria full screen
const fullGallery = new FullGallery({
  containerSelector: '#full-gallery',
  images: [
    'img/full1.jpg',
    'img/full2.jpg',
    'img/full3.jpg'
  ],
  indicadorSelector: '#full-indicador',
  prevSelector: '#full-prev',
  nextSelector: '#full-next'
});

// Inicializa a galeria em grid médio
const midGallery = new MidGallery({
  containerSelector: '#mid-gallery',
  images: [
    'img/mid1.jpg',
    'img/mid2.jpg',
    'img/mid3.jpg',
    'img/mid4.jpg',
    'img/mid5.jpg',
    'img/mid6.jpg'
  ],
  columns: 3
});