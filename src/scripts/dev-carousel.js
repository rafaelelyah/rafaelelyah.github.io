// dev-carousel.js

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