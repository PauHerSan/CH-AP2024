console.log("Suma de resistencias en serie");

function calcularResistenciaSerie() {
  const resistencias = []; // Array para almacenar los valores de las resistencias
  let resistenciaTotal = 0;
  
  let seguirIngresando = true;
  while (seguirIngresando) {
    const resistencia = parseFloat(prompt("Ingrese el valor de una resistencia (o 'salir' para terminar):"));
    if (isNaN(resistencia)) {
      if (resistencia.toLowerCase() === 'salir') {
        seguirIngresando = false;
      } else {
        console.log("Entrada inválida. Por favor, ingrese un número.");
      }
    } else {
      resistencias.push(resistencia);
      resistenciaTotal += resistencia;
    }
  }

  console.log("Las resistencias ingresadas son:", resistencias);
  console.log("La resistencia total en serie es:", resistenciaTotal + " ohmios");
}

calcularResistenciaSerie();