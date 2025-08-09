// projetos-carousel.js

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