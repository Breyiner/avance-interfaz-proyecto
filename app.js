// let abrir = document.querySelector('.movimiento');
// let cerrar = document.querySelector('#cerrarModal');

// document.querySelector("#login").addEventListener("click", () => {
//   window.location.assign("http://127.0.0.1:5500/inicio.html");
// });

// abrir.addEventListener('click', () => {
//   document.querySelector('.modal').showModal();
// });

// cerrar.addEventListener('click', () => {
//   document.querySelector('.modal').close();
// });

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  let correo = document.querySelector('#email').value;
  let contrasena = document.querySelector('#contrasena').value;

  try {
    let respuesta = await fetch(`http://localhost:8080/pruebaApi/api/usuarios/correo/${correo}`);

    let datos = await respuesta.json();

    if (datos.code == 404) {
      alert(datos.message);
      return;
    }

    else {
      let usuario = datos.data;
        if (contrasena === usuario.contrasena) {
          alert(`Bienvenido ${usuario.nombre}`);
          localStorage.setItem("usuario", JSON.stringify(usuario));
          window.location.assign('./inicio.html');
        } else {
          alert('El correo o la contraseña son incorrectos');
        }
    }

  } catch (error) {
    alert("Ups, se presentó un error");
    console.error('Hubo un problema con la solicitud:', error);
  }
});
