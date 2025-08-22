import { DesignGrid } from './design-grid.js';
import '../styles/main.scss';
import { DevCarousel } from './dev-carousel.js';
import { Header } from './header.js';
import { IlustracaoGrid } from './ilustracao-grid.js';
import { ProjetosCarousel } from './projetos-carousel.js';

const projetosCarousel = new ProjetosCarousel({ totalPaginas: 2 });
const ilustracaoGrid = new IlustracaoGrid();
const header = new Header();
const devCarousel = new DevCarousel({ totalPaginas: 3 });
const grid = new DesignGrid({ totalPaginas: 2 });

