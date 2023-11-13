const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intentos = 3;
while (intentos > 0) {

  const intentoUsuario = prompt(`Adivina el número (entre 1 y 10). Intentos restantes: ${intentos}`);

  const numeroUsuario = parseInt(intentoUsuario);

  if (numeroUsuario === numeroAleatorio) {
    alert("¡Adivinaste!");
    break;
  } else {
    alert(`Incorrecto. Intentos restantes: ${intentos - 1}`);
    intentos--;

    if (intentos === 0) {
      alert(`Lo siento, el número correcto era ${numeroAleatorio}. ¡Mejor suerte la próxima vez!`);
    }
  }
}

function mostrarCurriculum() {
  alert("A continuación veran  mi Curriculum");
}