// ilustracao.js

const galleryPopup = document.getElementById("gallery-popup");
const galleryContent = document.querySelector(".gallery-content");
const closeGalleryBtn = document.getElementById("close-gallery");

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

fetch('assets/data/ilustracao.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById("concept-art").addEventListener("click", () => {
      openGallery(data.conceptArt);
    });

    document.getElementById("artistica").addEventListener("click", () => {
      openGallery(data.artistica);
    });
  });

closeGalleryBtn.addEventListener("click", closeGalleryPopup);