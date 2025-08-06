// =======================
// Header transparente no topo
// =======================
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

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);

// =======================
// Carrossel de Projetos Dev
// =======================
const projetosDev = [
  {
    nome: "Asarado DBot",
    descricao: "Descrição do Projeto 1",
    link: "https://github.com/seuusuario/projeto1"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do Projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  }
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
  { nome: "Projeto A", descricao: "Descrição do Projeto A", link: "#" },
  { nome: "Projeto B", descricao: "Descrição do Projeto B", link: "#" },
  { nome: "Projeto B", descricao: "Descrição do Projeto B", link: "#" }
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
const projetosDesign = [
  {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "grande"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "medio"
  },
    {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "pequeno"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "pequeno"
  },
    {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "medio"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "cover"
  },
  {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "pequeno"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "medio"
  },
    {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "grande"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "pequeno"
  },
    {
    titulo: "Tipografia Experimental",
    descricao: "Projeto com contraste forte.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "medio"
  },
  {
    titulo: "Poster Cinematográfico",
    descricao: "Visual dramático e textura.",
    imagem: "assets/img/design/asar.jpg",
    tamanho: "medio"
  }
];
const cardsPorPagina = 6;
let paginaAtual = 0;

function renderizarDesignCards() {
  const mural = document.querySelector(".design-mural");
  mural.classList.remove("fade-in");
  mural.classList.add("fade-out");

  setTimeout(() => {
    mural.innerHTML = "";
    const inicio = paginaAtual * cardsPorPagina;
    const fim = inicio + cardsPorPagina;
    const cardsVisiveis = projetosDesign.slice(inicio, fim);

    cardsVisiveis.forEach(projeto => {
      const card = document.createElement("div");
      card.className = `design-card ${projeto.tamanho || ""}`;
      card.style.backgroundImage = `url(${projeto.imagem})`;
      card.innerHTML = `
        <div class="card-content">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </div>
      `;
      mural.appendChild(card);
    });

    mural.classList.remove("fade-out");
    mural.classList.add("fade-in");
  }, 300);
}

function atualizarNavegacao() {
  const botaoPrev = document.getElementById("design-prev");
  const botaoNext = document.getElementById("design-next");
  const totalPaginas = Math.ceil(projetosDesign.length / cardsPorPagina);
  botaoPrev.style.display = (paginaAtual === 0) ? "none" : "inline-block";
  botaoNext.style.display = (paginaAtual >= totalPaginas - 1) ? "none" : "inline-block";
  document.getElementById("design-indicador").textContent = `Página ${paginaAtual + 1} de ${totalPaginas}`;
}

document.getElementById("design-next").addEventListener("click", () => {
  const totalPaginas = Math.ceil(projetosDesign.length / cardsPorPagina);
  if (paginaAtual < totalPaginas - 1) {
    paginaAtual++;
    renderizarDesignCards();
    atualizarNavegacao();
  }
});

document.getElementById("design-prev").addEventListener("click", () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    renderizarDesignCards();
    atualizarNavegacao();
  }
});

renderizarDesignCards();
atualizarNavegacao();

// =======================
// Galeria Pop-up Ilustração (sem bolinhas)
// =======================
const galleryPopup = document.getElementById("gallery-popup");
const galleryContent = document.querySelector(".gallery-content");
const closeGalleryBtn = document.getElementById("close-gallery");

const conceptArtImages = [
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg"
];

const ilustracaoArtisticaImages = [
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg",
  "assets/img/design/asar.jpg"
];

function openGallery(images) {
  galleryContent.innerHTML = "";

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Ilustração";
    galleryContent.appendChild(img);
  });

  galleryPopup.classList.remove("hidden");
  galleryPopup.classList.add("fade-in");
  document.body.classList.add("galeria-ativa");
  document.body.style.overflow = "hidden";
}

function closeGalleryPopup() {
  galleryPopup.classList.remove("fade-in");
  galleryPopup.classList.add("fade-out");

  setTimeout(() => {
    galleryPopup.classList.add("hidden");
    galleryPopup.classList.remove("fade-out");
  }, 300);

  document.body.classList.remove("galeria-ativa");
  document.body.style.overflow = "";
}

document.getElementById("concept-art").addEventListener("click", () => {
  openGallery(conceptArtImages);
});

document.getElementById("artistica").addEventListener("click", () => {
  openGallery(ilustracaoArtisticaImages);
});

closeGalleryBtn.addEventListener("click", closeGalleryPopup);