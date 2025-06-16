let usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  let nombreHeader = document.querySelector('.profile__nombre');
  let nombreMenu = document.querySelector('.info-perfil__name');

  nombreHeader.textContent = `${usuario.nombre} ${usuario.apellido}`;
  nombreMenu.textContent = `${usuario.nombre} ${usuario.apellido}`;
}