/*console.log("User profile");

const nombreUsuario = prompt("Ingresa tu nombre de usuario");
const EdadUsuario = prompt("¿Cuál es tu edad?");
const Lasfavs = prompt("Nombra cinco películas favoritas (separadas por comas):");

const listaDeFavs = Lasfavs.split(',');
const peliculasLimpias = listaDeFavs.map(pelicula => pelicula.trim());
console.log("Tu nombre de usuario es " + nombreUsuario + ", tu edad es " + EdadUsuario + " y tus películas favoritas son:");
peliculasLimpias.forEach(pelicula => {
    console.log("*" + pelicula);
});*/

/* películas de prueba : el sueño de wadja, interstellar, el príncipe de egipto, locamente millonarios, quisiera ser millonario*/

console.log("Número mayor");

function ElnumeroMAYOR(){
    let numeros = [];
    for (let i = 0; i < 10; i++) {
      let numero = prompt("Ingrese el número " + (i + 1) + ":");
      numeros.push(numero);
    }
    let numeroMayor = Math.max(...numeros);
  
    console.log("El número mayor es:", numeroMayor);
}
  
 ElnumeroMAYOR();
