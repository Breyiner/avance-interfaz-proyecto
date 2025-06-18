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
    let response = await fetch(`http://localhost:8080/pruebaApi/api/usuarios/correo/${correo}`);

    if (!response.ok) {
      alert('Ocurrió un error con el servidor');
      return;
    }

    const responseClone = response.clone();
    let usuarioTexto = await responseClone.text();

    if (usuarioTexto) {

      let usuario = JSON.parse(usuarioTexto);
  
      if (contrasena === usuario.contrasena) {
        alert(`Bienvenido ${usuario.nombre}`);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.assign('./inicio.html');
      } else {
        alert('El correo o la contraseña son incorrectos');
      }
      
    }

    else alert('El usuario no existe');

  } catch (error) {
    alert(error.message);
    console.error('Hubo un problema con la solicitud:', error);
  }
});
