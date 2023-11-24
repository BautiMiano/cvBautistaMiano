let numeroAleatorio = generarNumeroAleatorio(); 
let intentos = 5;

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

function reiniciarJuego() {
  numeroAleatorio = generarNumeroAleatorio();
  intentos = 5;
  document.getElementById('numeroUsuario').value = '';
}

function adivinarNumero() {
  const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 20) {
    alert("Por favor, ingresa un número válido entre 1 y 20.");
    return;
  }

  intentos--;

  if (numeroUsuario === numeroAleatorio) {
    alert(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${5 - intentos} intentos🎉🎉.`);
    reiniciarJuego();
  } else {
    let pista = (numeroUsuario < numeroAleatorio) ? "El número a adivinar es mayor." : "El número a adivinar es menor.";
    
    if (intentos === 0) {
      alert(`Lo siento, has agotado tus intentos. El número a adivinar era ${numeroAleatorio}. ¡Mejor suerte la próxima vez!`);
      reiniciarJuego();
    } else {
      alert(`${pista} Intentos restantes: ${intentos}`);
    }
  }
}