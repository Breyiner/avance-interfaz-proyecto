const formulario = document.querySelector('form');
const boton = document.querySelector('#registrar');

// Obtenemos los elementos del formulario
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const correo = document.querySelector('[name="correo"]');
const contrasena = document.querySelector('[name="contrasena"]');
const ciudad = document.querySelector('[name="ciudad_id"]');
const genero = document.querySelector('[name="genero_id"]');

// const dataUsuario = [nombre,apellido,correo,contrasena,ciudad,genero];

const post = async (endpoint, objeto) => {
    return await fetch('http://localhost:8080/pruebaApi/api/' + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    });
}


const validarRadiosButton = (radiosButton) => {
  
  // Obtenemos el contenedor de los radios button
  // y buscamos el radio button que está chequeado
  const radioCheckeado = [...radiosButton].find((radio) => radio.checked); 
  
  
  return radioCheckeado; // Retornamos el radio button chequeado
}


const dataUsuario = {};

const validarCampos = (e) => {
    let valido = true;
    const campos = [...e.target].filter((elemento) => elemento.hasAttribute('required') && (elemento.tagName == 'INPUT' || elemento.tagName == 'SELECT'));  

    campos.forEach((campo) => {  
    
    dataUsuario[campo.getAttribute('name')] = campo.value;
  });

  const radiosButton = [...campos].filter((campo) => campo.type === 'radio');
  // Validamos si hay algún radio button en el formulario
  if (radiosButton.length > 0) {
    // Validamos si hay algún radio button chequeado
    const radioCheckeado = validarRadiosButton(radiosButton);
    if (!radioCheckeado) valido = false; // Si no hay radio button chequeado, el formulario no es válido
    // Si hay radio button chequeado, lo agregamos al objeto de dataUsuario
    else dataUsuario[radioCheckeado.name] = radioCheckeado.value;    
  }

  return valido;
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validarCampos(e)) return;

    dataUsuario['estado_id'] = 1;

    console.log(dataUsuario);
    
    
    try {
        // Realizamos una petición POST al servidor para crear el usuario
        const respuesta = await post("usuarios", dataUsuario);

        // Convertimos la respuesta a formato JSON
        // const resultado = await respuesta.json();

        // Si la respuesta NO fue exitosa (por ejemplo, error 400 o 500), mostramos los errores
        if (!respuesta.ok) {
            const textoError = await respuesta.text(); // Obtiene la respuesta como texto
            console.log(textoError); // Muestra el texto de error en la consola
            alert("Error al intentar crear el usuario"); // Muestra el error al usuario
            return; // Detenemos el flujo si hay errores
        }

        alert("Formulario enviado.");    
        e.target.reset();
    } catch (error) {
        // alert(`error: ${error.message}`);
        console.log(error.message);
    }
    
});