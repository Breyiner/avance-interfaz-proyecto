const obtenerContenido = async (ruta) => {
  let data = await fetch(ruta);
  return await data.text();
}

const showModalMovimientos = async () => {
  Swal.fire({
    html: await obtenerContenido('./modales/modalMovimientos.html'),
    showConfirmButton: false,
    showCloseButton: false, // Desactiva la X original
    customClass: {
      popup: 'mi-modal mi-modal--movimientos padding-none',
      htmlContainer: 'padding-none'
    },
    didOpen: () => {
      const cerrar = document.querySelector('.modal__salir');
      cerrar.addEventListener('click', () => {
        Swal.close()

        setTimeout(async () => {
          await showDetallesMeta();
        }, 200);
      });

      document.addEventListener('click', (e) => {
        if (e.target.closest('.movimiento')) {
          Swal.close();

          setTimeout(async () => {
            await modalDetallesMovimientos();
          }, 200);
        }
      });
    }
  });
}

const modalDetallesMovimientos = async () => {
  Swal.fire({
    html: await obtenerContenido('./modales/modalDetallesMovimientos.html'),
    showConfirmButton: false,
    showCloseButton: false, // Desactiva la X original
    customClass: {
      popup: 'mi-modal padding-none',
      htmlContainer: 'padding-none'
    },
    didOpen: async () => {
      const cerrar = document.querySelector('.modal__salir');
      cerrar.addEventListener('click', () => {
        Swal.close()


        setTimeout(async () => {
          await showModalMovimientos();
        }, 200);
      });
    }
  });
}

const showDetallesMeta = async () => {
  Swal.fire({
    html: await obtenerContenido('./modales/modalDetallesMeta.html'),
    showConfirmButton: false,
    showCloseButton: false, // Desactiva la X original
    customClass: {
      popup: 'mi-modal padding-none',
      htmlContainer: 'padding-none'
    },
    didOpen: async () => {
      const cerrar = document.querySelector('.modal__salir');
      cerrar.addEventListener('click', () => Swal.close());
      
      document.addEventListener('click', (e) => {
        console.log(e.target.closest('.boton--movimientos'));
        
        if (e.target.closest('.boton--movimientos')) {
          Swal.close();

          setTimeout(async () => {
            await showModalMovimientos();
          }, 200);
        }
      });
    }
  });
}


document.addEventListener('click', (e) => {

  if (e.target.closest('.meta')) showDetallesMeta();
});