const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"]; // Teclas especiales que se permiten

export const validarTexto = (event) => {
  const key = event.key; // Obtenemos la tecla presionada
  const regex = /^[\D]*$/i;  // Expresión regular para letras y caracteres especiales

  if ((!regex.test(key) || event.target.value.length > 30) && !teclasEspeciales.includes(key)) { // Validamos si la tecla no es una letra o si el campo supera los 30 caracteres

    event.preventDefault(); // Evitamos la acción de la tecla
  }
}