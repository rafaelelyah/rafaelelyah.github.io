// script.js

// Header transparente no topo
const header = document.getElementById("main-header");

function updateHeader() {
  if (window.scrollY < 50) {
    header.classList.add("transparent");
    header.classList.remove("solid");
  } else {
    header.classList.add("solid");
    header.classList.remove("transparent");
  }
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);

// =======================
// Carrossel de Projetos Dev
// =======================
const projetosDev = [
  {
    nome: "Projeto 1",
    descricao: "Descrição do Projeto 1",
    link: "https://github.com/seuusuario/projeto1"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  }
  // Adicione mais projetos aqui
];

const carouselDev = document.querySelector(".carousel-dev");

projetosDev.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver no GitHub</a>
  `;
  carouselDev.appendChild(card);
});

// =======================
// Carrossel de Projetos em andamento
// =======================
const projetosAndamento = [
  {
    nome: "Projeto A",
    descricao: "Descrição do Projeto A",
    link: "#"
  },
  {
    nome: "Projeto B",
    descricao: "Descrição do Projeto B",
    link: "#"
  }
  // Adicione mais projetos aqui
];

const carouselProjetos = document.querySelector(".carousel-projetos");

projetosAndamento.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver detalhes</a>
  `;
  carouselProjetos.appendChild(card);
});

// =======================
// Navegação Design Grid
// =======================
const designImages = [
  ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
  ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"]
  // Adicione mais grupos de imagens
];

let designIndex = 0;
const designGrid = document.querySelector(".design-grid");

function renderDesignGrid(index) {
  designGrid.innerHTML = "";
  designImages[index].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    designGrid.appendChild(img);
  });
}

document.getElementById("design-prev").addEventListener("click", () => {
  designIndex = (designIndex - 1 + designImages.length) % designImages.length;
  renderDesignGrid(designIndex);
});

document.getElementById("design-next").addEventListener("click", () => {
  designIndex = (designIndex + 1) % designImages.length;
  renderDesignGrid(designIndex);
});

renderDesignGrid(designIndex);

// =======================
// Galeria Pop-up Ilustração
// =======================
const galleryPopup = document.getElementById("gallery-popup");
const galleryContent = document.querySelector(".gallery-content");
const closeGallery = document.getElementById("close-gallery");

const conceptArtImages = ["concept1.jpg", "concept2.jpg"];
const ilustracaoArtisticaImages = ["art1.jpg", "art2.jpg"];

function openGallery(images) {
  galleryContent.innerHTML = "";
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    galleryContent.appendChild(img);
  });
  galleryPopup.classList.remove("hidden");
}

document.getElementById("concept-art").addEventListener("click", () => {
  openGallery(conceptArtImages);
});

document.getElementById("artistica").addEventListener("click", () => {
  openGallery(ilustracaoArtisticaImages);
});

closeGallery.addEventListener("click", () => {
  galleryPopup.classList.add("hidden");
});