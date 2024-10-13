
function Triangulo(filas) {
    for (let i = 1; i <= filas; i++) {
      let linea = '';
      for (let j = 1; j <= i; j++) {
        linea += '*';
      }
      console.log(linea);
    }
}
  
Triangulo(5);