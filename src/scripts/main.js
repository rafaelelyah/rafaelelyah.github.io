// main.js

import { updateHeader, toggleMenu } from './header.js';
import './dev-carousel.js';
import './projetos-carousel.js';
import './design-grid.js';
import './ilustracao.js';
import '../styles/main.scss';


// Inicializa comportamento do header
window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);

// Menu mobile
document.querySelector('.hamburger').addEventListener("click", toggleMenu);