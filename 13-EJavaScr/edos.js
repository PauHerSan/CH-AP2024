function tableroAjedrez() {
    let tablero = "";
    for (let fila = 0; fila < 8; fila++) {
      for (let columna = 0; columna < 8; columna++) {
        // Alternamos entre espacios y # en cada posición
        tablero += (fila + columna) % 2 === 0 ? " " : "#";
      }
      tablero += "\n"; // Salto de línea al final de cada fila
    }
    return tablero;
  }
  
  // Llamamos a la función y mostramos el tablero en la consola
  console.log(tableroAjedrez());