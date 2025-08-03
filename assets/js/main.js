const carrossel = document.querySelector('.carrossel-horizontal');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

btnPrev.addEventListener('click', () => {
  carrossel.scrollBy({ left: -320, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
  carrossel.scrollBy({ left: 320, behavior: 'smooth' });
});