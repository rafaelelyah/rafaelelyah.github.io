// header.js
const header = document.getElementById("main-header");

export function updateHeader() {
  if (window.scrollY < 50) {
    header.classList.add("transparent");
    header.classList.remove("solid");
  } else {
    header.classList.add("solid");
    header.classList.remove("transparent");
  }
}

export function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}