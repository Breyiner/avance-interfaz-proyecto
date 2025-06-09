let abrir = document.querySelector('#abrirModal');
let cerrar = document.querySelector('#cerrarModal');

// document.querySelector("#login").addEventListener("click", () => {
//   window.location.assign("http://127.0.0.1:5500/inicio.html");
// });

abrir.addEventListener('click', () => {
  document.querySelector('#modal').showModal();
});

cerrar.addEventListener('click', () => {
  document.querySelector('#modal').close();
});
