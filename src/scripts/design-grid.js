// design-grid.js

let projetosDesign = [];
const cardsPorPagina = 6;
let paginaAtual = 0;

fetch('assets/data/design-grid.json')
  .then(res => res.json())
  .then(data => {
    projetosDesign = data;
    renderizarDesignCards();
    atualizarNavegacao();
  });

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