let usuario = JSON.parse(localStorage.getItem("usuario"));
const movimiento = document.querySelector(".movimiento");
const modal = document.querySelector(".modal");
let cerrar = document.querySelector('.modal__salir');


if (usuario) {
  let nombreHeader = document.querySelector('.profile__nombre');
  let nombreMenu = document.querySelector('.info-perfil__name');

  nombreHeader.textContent = `${usuario.nombre} ${usuario.apellido}`;
  nombreMenu.textContent = `${usuario.nombre} ${usuario.apellido}`;
}


movimiento.addEventListener("click", (e) => {
  document.querySelector('.modal').showModal();
  modal.classList.add("mostrar"); // Mostrar modal
});

cerrar.addEventListener('click', () => {
  document.querySelector('.modal').close();
  modal.classList.remove("mostrar"); // Ocultar modal
});