function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}
